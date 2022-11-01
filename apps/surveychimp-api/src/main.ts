/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';
import { connect, handleGlobalErrors } from '@surveychimp/surveychimp-lib';
import surveyRouter from './app/routes/surveyRouter';

const app = express();


//Required to parse json body
app.use(express.json());

//Routers
app.use(surveyRouter);

//Global error handler
app.use(handleGlobalErrors);

const port = process.env.port || 3333;

try {
  connect().then(() => {
    const server = app.listen(port, () => {
      console.log(`Hello, Listening at http://localhost:${port}/api`);
    });
    server.on('error', () => console.log('error'));
  })
} catch (e) {
  console.log('error');
  throw e;
}