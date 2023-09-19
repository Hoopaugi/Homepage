import express from 'express';

import healthRouter from './health';

const apiRoutes = express.Router();

apiRoutes.use('/health', healthRouter);

export default apiRoutes;
