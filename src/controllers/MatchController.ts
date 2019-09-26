import { Request, Response } from 'express';
import { Match } from '../models';

export class MatchController {

  public static getAll = async (req: Request, res: Response) => {
    res.send(await Match.query());
  }

}
