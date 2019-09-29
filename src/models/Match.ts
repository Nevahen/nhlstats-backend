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
  };

  static modelPaths = [__dirname];

}
