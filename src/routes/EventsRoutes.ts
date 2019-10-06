import { EventsController } from 'controllers';
import express from 'express';

const router = express.Router();

router.patch('/:id', EventsController.updateEvent);

export { router as EventsRoutes };
