import { Model } from 'objection';

export class Team extends Model {

  static tableName = 'teams';

  readonly id!: number;
  name: string;
  shorthand: string;
  league: number;

  static modelPaths = [__dirname];

}
