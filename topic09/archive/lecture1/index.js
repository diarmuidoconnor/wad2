import express from 'express';
import contactsRouter from './api/contacts'
import './db';
//simple router. Suggested useage
//1. Add contacts using POST /api/contacts
//2. Do a GET /api/contacts to see the list of added contacts
//3. Copy the _id value from one contact and use it to do a GET /api/contacts/:id
const app = express();

const errHandler = (err, req, res, next) => {
    /* if the error in development then send stack trace to display whole error,
    if it's in production then just send error message  */
    if(process.env.NODE_ENV === 'production') {
      return res.status(500).send(`Something went wrong!`);
    }
    res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
  };

app.use(express.json());

app.use('/api/contacts', contactsRouter)

app.use(errHandler);

app.listen(8080, () => {
    console.info('Express listening on port', 8080);
});