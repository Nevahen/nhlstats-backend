import { Request, Response } from 'express';
import { Match } from 'models';

export class MatchController {

  public static getAll = async (req: Request, res: Response) => {
    res.send(await Match.query().eager('[_homeTeam, _awayTeam, players]'));
  }

  public static newMatch = async (req: Request, res: Response) => {
    res.send(await Match.query().insertGraph(req.body).catch(err => console.log(err)));
  }

}
