import { Request, Response } from 'express';

export class AuthController {

  public static authenticate = async (req: Request, res: Response) => {
    console.log(req.user);
    const { username, password } = req.body;
    res.json({ username });
  }

}
