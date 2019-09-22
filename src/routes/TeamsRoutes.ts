import { TeamsController } from 'controllers';
import express from 'express';

const router = express.Router();

router.get('/', TeamsController.getAll);

export { router as TeamsRoutes };
