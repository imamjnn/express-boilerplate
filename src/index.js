import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.send('Giska App');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
