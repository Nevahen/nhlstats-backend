import { MatchController } from 'controllers';
import express from 'express';

const router = express.Router();

router.get('/', MatchController.getAll);
router.post('/', MatchController.newMatch);

export { router as MatchRoutes };
