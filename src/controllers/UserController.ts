import { Request, Response } from 'express';
import { User } from 'models';

export class UserController {

  public static getAll = async (req: Request, res: Response) => {
    res.send(await User.query());
  }

  public static newUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).send({
        error: 'username and password required',
      });
    }

    if (password.length < 5) {
      return res.status(400).send({
        error: 'too short password.',
      });
    }

    try {
      const response = await User.query().insert({
        username,
        password,
      });
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  }

  public static getUserProfile = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.query().findById(id).eager('matches.[players,_homeTeam,_awayTeam]');

    if (!user) {
      return res.status(404).send({ error: 'User not found', status: 404 });
    }

    const playerStats = await user.getPlayerStats();
    const mostPlayed = await user.getMostPlayedTeam();
    user.$omit('events');

    const payload = {
      user,
      stats: playerStats,
      mostPlayed,
    };

    res.send(payload);

  }

}
