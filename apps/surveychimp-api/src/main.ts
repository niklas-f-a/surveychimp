import { connect } from '@surveychimp/surveychimp-lib';
import app from './app';

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

console.log('hej')