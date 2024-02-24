import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import router from './router';

const app = express();
const port = 3000;

app.disable('x-powered-by');
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
