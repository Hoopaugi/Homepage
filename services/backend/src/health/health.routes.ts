import express from 'express';

import handlers from './health.handlers';

const router = express.Router();

router.get('/', handlers.get);

export default router;
