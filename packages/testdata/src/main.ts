import cors from 'cors';
import express from 'express';

import { exec } from './handler';
import './handlers/hello';

const main = () => {
  const app = express();
  app.use(cors());

  app.get('*', (req, res) => {
    void exec(req, res);
  });

  console.log('listen: http://localhost:3010');
  app.listen(3010);
};

main();
