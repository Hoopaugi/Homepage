import express, { Express } from 'express';

import apiRouter from './api';
import healthRouter from './health';

const app: Express = express();

app.use(express.json());

app.use('/api', apiRouter);
app.use('/health', healthRouter);

export default app;
