import { Model } from 'objection';
import { GameEventTypes } from 'types/GameEventTypes';

export class GameEvent extends Model {

  static tableName = 'game_events';

  readonly id!: number;

  event_type: GameEventTypes;
  match_id: number;
  period: number;
  player_id: number;
  team: number;

  static modelPaths = [__dirname];

}
