import express from 'express';

import healthRouter from './health';
import pingRouter from './ping';

const router = express.Router();

router.use('/health', healthRouter);
router.use('/ping', pingRouter);

export default router;
