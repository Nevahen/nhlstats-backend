import { Request, Response } from 'express';
import { User } from '../models';

export class UserController {

  public static getAll = async (req: Request, res: Response) => {
    res.send(await User.query());
  }

}
