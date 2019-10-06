import { GameEventTypes } from 'types';
import { BaseModel } from '.';

export class GameEvent extends BaseModel {

  static tableName = 'game_events';

  readonly id!: number;

  event_type: GameEventTypes;
  match_id: number;
  period: number;
  player_id: number;
  team: number;

  static modelPaths = [__dirname];

  static pickJsonSchemaProperties = true;

  static jsonSchema = {
    type: 'object',
    properties: {
      match_id: { type: 'integer' },
      period: { type: 'integer' },
      player_id: { type: 'integer' },
      event_type: { type: 'integer' },
      team: { type: 'integer' },
    },
  };

}
