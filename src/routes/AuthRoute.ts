import { AuthController } from 'controllers';
import express from 'express';
import passport from 'passport';

const router = express.Router();

router.post('/', passport.authenticate('local'), AuthController.authenticate);
router.get('/checkLogin', AuthController.checkLogin);

export { router as AuthRoute };
