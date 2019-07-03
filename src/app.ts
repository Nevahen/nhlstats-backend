import bodyParser from 'body-parser';
import express from 'express';
import { ProjectRoutes } from 'routes';

const app = express();

app.set('port', process.env.PORT || 3000);

// Global middlewares
app.use(bodyParser.json());

// Root routes
app.use('/projects', ProjectRoutes);

export default app;
