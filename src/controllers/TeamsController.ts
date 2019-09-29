import { Request, Response } from 'express';
import { Team } from 'models';

export class TeamsController {

  public static getAll = async (req: Request, res: Response) => {
    res.send(await Team.query());
  }

}
