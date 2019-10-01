import bodyParser from 'body-parser';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { AuthRoute, MatchRoutes, TeamsRoutes, UserRoutes } from 'routes';

import { localStrategy, PPDeserializeUser, PPSerializeUser } from './middlewares/passport';
import { requireAuth } from './middlewares/requireAuth';

const app = express();

app.set('port', process.env.PORT || 3000);

if (app.get('env') === 'development') {
  app.use((req, res, next) =>  {
    res.header('Access-Control-Allow-Origin', req.headers.origin as string);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
}

// Global middlewares
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
 }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

passport.use(localStrategy);
PPDeserializeUser();
PPSerializeUser();

// Root routes
app.use('/auth', AuthRoute);
app.use('/teams', TeamsRoutes);
app.use('/matches', requireAuth, MatchRoutes);
app.use('/users', requireAuth, UserRoutes);

export default app;
