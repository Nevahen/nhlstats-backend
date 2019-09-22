import { AuthController } from 'controllers';
import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/',  AuthController.authenticate);
router.post('/', passport.authenticate('local'), AuthController.authenticate);

export { router as AuthRoute };
