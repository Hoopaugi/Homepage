import dotenv from 'dotenv';

dotenv.config();

// eslint-disable-next-line prefer-destructuring
export const PORT = process.env.PORT;

export default { PORT };
