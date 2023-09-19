import express from 'express';

import healthControllers from './health.controllers';

const healthRoutes = express.Router();

healthRoutes.get('/', healthControllers.get);

export default healthRoutes;
