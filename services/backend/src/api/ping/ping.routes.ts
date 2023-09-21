import express from 'express';

import handlers from './ping.handlers';

const router = express.Router();

router.get('/', handlers.get);

export default router;
