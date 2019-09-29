import { UserController } from 'controllers';
import express from 'express';

const router = express.Router();

router.get('/', UserController.getAll);

export { router as UserRoutes };
