import { Request, Response } from 'express';

const get = async (req: Request, res: Response) => {
  res.send('ok');
};

export default { get };
