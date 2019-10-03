import { Request, Response } from 'express';
import { Match } from 'models';

export class MatchController {

  public static getAll = async (req: Request, res: Response) => {
    res.send(await Match.query().eager('[_homeTeam, _awayTeam, players]'));
  }

  public static newMatch = async (req: Request, res: Response) => {
    res.send(await Match.query().insertGraph(req.body).catch(err => console.log(err)));
  }

  public static getMatch = async (req: Request, res: Response) => {
    const match = await Match.query().findById(req.params.id).eager(
      '[players,events,_homeTeam,_awayTeam]',
    );
    if (match) {
      return res.send(match);
    } else {
      return res.sendStatus(404).send({ error: 'not found' });
    }
  }

}
