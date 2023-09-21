import { Request, Response } from 'express';

const get = async (req: Request, res: Response) => {
  res.send('pong');
};

export default { get };
