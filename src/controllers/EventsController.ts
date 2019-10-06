import { Request, Response } from 'express';
import { pick } from 'lodash';
import { GameEvent } from 'models';
import { GameEventTypes } from 'types/GameEventTypes';

export class EventsController {

  public static updateEvent = async (req: Request, res: Response) => {

    const allowedTypes = [
      GameEventTypes.GOAL,
      GameEventTypes.MINOR_PENALTY,
      GameEventTypes.MAJOR_PENALTY,
    ];

    const event = await GameEvent.query().findById(req.params.id);

    if (!event) {
      return res.sendStatus(404);
    }

    if (!allowedTypes.includes(event.event_type)) {
      return res.sendStatus(400);
    }

    const updatedFields = pick(req.body, [
      'event_type', 'player_id', 'team',
    ]);

    // TODO: Server side check if team should be updated.

    await event.$query().patchAndFetchById(req.params.id, updatedFields);

    res.send(event);
  }

}
