import { ProjectController } from 'controllers';
import express from 'express';

const router = express.Router();

router.get('/', ProjectController.listAll);
router.post('/', ProjectController.create);

export { router as ProjectRoutes };
