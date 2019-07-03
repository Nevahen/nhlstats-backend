import { Request, Response } from 'express';
import { Project } from 'models';

export class ProjectController {

  public static listAll = async (req: Request, res: Response) => {
    const projects = await Project.query();
    res.send(projects);
  }

  public static create = async (req: Request, res: Response) => {

    if (!req.body.name) {
      res.status(500).send({
        error: 'no name :(',
      });
    }

    const project = await Project.query().insert({
      name: req.body.name,
    });

    res.send(project);
  }
}
