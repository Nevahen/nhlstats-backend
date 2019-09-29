import { GameEventTypes } from 'types/GameEventTypes';
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

}
