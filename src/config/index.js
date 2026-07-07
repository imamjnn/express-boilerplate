import dotenv from 'dotenv';

dotenv.config();

export const port = Number(process.env.PORT) || 3000;
export const rateLimitWindowMs = Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000;
export const rateLimitMax = Number(process.env.RATE_LIMIT_MAX) || 100;
