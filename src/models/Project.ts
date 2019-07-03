import { Model } from 'objection';

export class Project extends Model {

  static tableName = 'project';

  readonly id!: number;
  name: string;

  static modelPaths = [__dirname];

}
