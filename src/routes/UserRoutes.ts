import { UserController } from 'controllers';
import express from 'express';

const router = express.Router();

router.get('/', UserController.getAll);
router.post('/', UserController.newUser);

export { router as UserRoutes };