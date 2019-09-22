import bcrypt from 'bcryptjs';
import { Model } from 'objection';

export class User extends Model {

  static tableName = 'users';

  readonly id!: number;
  username: string;
  password: string;

  static modelPaths = [__dirname];

  public validatePassword = async (password: string) => {
    return await bcrypt.compare(password, this.password);
  }

}
