import bcrypt from 'bcryptjs';
import { BaseModel, GameEvent, Match } from 'models';
import { GameEventTypes } from 'types';

export class User extends BaseModel {

  static tableName = 'users';

  readonly id!: number;
  username: string;
  password: string;
  matches: Match[];

  static modelPaths = [__dirname];

  $protected = ['password'];

  static relationMappings = {
    matches: {
      relation: BaseModel.ManyToManyRelation,
      modelClass: __dirname + '/Match',
      join: {
        from: 'users.id',
        through: {
          from: 'matches_users.player_id',
          to: 'matches_users.match_id',
        },
        to: 'matches.id',
      },
    },
    events: {
      relation: BaseModel.HasManyRelation,
      modelClass: __dirname + '/GameEvent',
      join: {
        from: 'users.id',
        to: 'game_events.player_id',
      },
    },
  };

  public validatePassword = async (password: string) => {
    return await bcrypt.compare(password, this.password);
  }

  public $beforeInsert = async () => {
    this.password = await bcrypt.hash(this.password, 14);
  }

  public getRecentMatches = async () => {
    return await this.$relatedQuery('matches')
      .eager('players')
      .orderBy('id', 'DESC')
      .limit(5);
  }

  public getPlayerStats = async () => {
    const stats = await this.$relatedQuery('events');

    let playerStats = {
      goals: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
      penalties: {
        periods: {
          1: {},
          2: {},
          3: {},
          4: {},
          5: {},
        },
        [GameEventTypes.MINOR_PENALTY]: 0,
        [GameEventTypes.MAJOR_PENALTY]: 0,
      },
    };

    playerStats = stats.reduce((result: any, stat: GameEvent) => {
      if (stat.event_type === GameEventTypes.GOAL) {
        return {
          ...result,
          goals: {
            ...result.goals,
            [stat.period]: (result.goals[stat.period] + 1),
          },
        };
      }

      if (stat.event_type === GameEventTypes.MINOR_PENALTY || stat.event_type === GameEventTypes.MAJOR_PENALTY) {
        return {
          ...result,
          penalties: {
            ...result.penalties,
            [stat.event_type]: (result.penalties[stat.event_type] + 1),
            periods: {
              ...result.penalties.periods,
              [stat.period]: {
                ...result.penalties.periods[stat.period],
                [stat.event_type]: (result.penalties.periods[stat.period][stat.event_type] + 1) || 1,
              },
            },
          },
        };
      }

      return result;
    }, playerStats);

    return playerStats;
  }

}
