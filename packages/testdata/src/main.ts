import cors from 'cors';
import express, { static as expressStatic } from 'express';

import { exec } from './handler';
import './handlers';

const main = () => {
  const app = express();
  app.use(cors());
  app.use('/static', expressStatic('static'));

  app.get('*', (req, res) => {
    void exec(req, res);
  });

  console.log('listen: http://localhost:3010');
  app.listen(3010);
};

main();
