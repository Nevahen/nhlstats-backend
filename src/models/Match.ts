import { BaseModel } from 'models';

export class Match extends BaseModel {

  static tableName = 'matches';

  readonly id!: number;

  awayTeam: number;
  homeTeam: number;
  winnerTeam: number;
  scoreHome: number;
  scoreAway: number;
  date: string;

  static relationMappings = {
    players: {
      relation: BaseModel.ManyToManyRelation,
      modelClass: __dirname + '/User',
      join: {
        from: 'matches.id',
        through: {
          from: 'matches_users.match_id',
          extra: ['team'],
          to: 'matches_users.player_id',
        },
        to: 'users.id',
      },
    },
    events: {
      relation: BaseModel.HasManyRelation,
      modelClass: __dirname + '/GameEvent',
      join: {
        from: 'matches.id',
        to: 'game_events.match_id',
      },
    },
    _homeTeam: {
      relation: BaseModel.HasOneRelation,
      modelClass: __dirname + '/Team',
      join: {
        from: 'matches.homeTeam',
        to: 'teams.id',
      },
    },
    _awayTeam: {
      relation: BaseModel.HasOneRelation,
      modelClass: __dirname + '/Team',
      join: {
        from: 'matches.awayTeam',
        to: 'teams.id',
      },
    },
  };

  static modelPaths = [__dirname];

}
