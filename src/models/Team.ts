import { BaseModel } from 'models';

export class Team extends BaseModel {

  static tableName = 'teams';

  readonly id!: number;
  name: string;
  shorthand: string;
  league: number;

  static modelPaths = [__dirname];

}
