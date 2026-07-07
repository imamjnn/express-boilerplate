import 'express-async-errors';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import {rateLimit} from 'express-rate-limit';
import compression from 'compression';
import router from './router';
import {port, rateLimitWindowMs, rateLimitMax} from './config';

const app = express();

const limiter = rateLimit({
  windowMs: rateLimitWindowMs,
  max: rateLimitMax,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.json({status: 0, message: 'Too many requests, please try again later.'});
  },
});

app.use(compression());
app.use(limiter);
app.disable('x-powered-by');
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}

export default app;
