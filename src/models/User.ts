import bcrypt from 'bcryptjs';

import { BaseModel } from 'models';

export class User extends BaseModel {

  static tableName = 'users';

  readonly id!: number;
  username: string;
  password: string;

  static modelPaths = [__dirname];

  $protected = ['password'];

  static relationMappings = {
    matches: {
      relation: BaseModel.ManyToManyRelation,
      modelClass: __dirname + '/Match',
      join: {
        from: 'user.id',
        through: {
          from: 'matches_users.player_id',
          to: 'matches_users.match_id',
        },
        to: 'matches.id',
      },
    },
  };

  public validatePassword = async (password: string) => {
    return await bcrypt.compare(password, this.password);
  }

}
