import bodyParser from 'body-parser';
import express from 'express';
import session from 'express-session';
import { localStrategy, PPDeserializeUser, PPSerializeUser } from 'middlewares/passport';
import passport from 'passport';
import { AuthRoute, TeamsRoutes } from 'routes';

const app = express();

app.set('port', process.env.PORT || 3000);

// Global middlewares
app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

passport.use(localStrategy);
PPDeserializeUser();
PPSerializeUser();

// Root routes
app.use('/auth', AuthRoute);
app.use('/teams', TeamsRoutes);

export default app;
