import { UserController } from 'controllers';
import express from 'express';

const router = express.Router();

router.get('/', UserController.getAll);
router.get('/:id', UserController.getUserProfile);
router.post('/', UserController.newUser);

export { router as UserRoutes };
