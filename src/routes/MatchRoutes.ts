import { MatchController } from 'controllers';
import express from 'express';

const router = express.Router();

router.get('/', MatchController.getAll);

export { router as MatchRoutes };
