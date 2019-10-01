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

    if (password.lenght < 5) {
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

}
