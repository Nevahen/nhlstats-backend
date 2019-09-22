import bodyParser from 'body-parser';
import express from 'express';
import session from 'express-session';
import { localStrategy, PPDeserializeUser, PPSerializeUser } from 'middlewares/passport';
import passport from 'passport';
import { AuthRoute, TeamsRoutes } from 'routes';

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
