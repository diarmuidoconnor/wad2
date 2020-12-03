import dotenv from 'dotenv';
import express from 'express';
import contactsRouter from './api/contacts/index-async.js';
import bodyParser from 'body-parser';
import './db';

//simple router. Suggested useage
//1. Add contacts using POST /api/contacts
//2. Do a GET /api/contacts to see the list of added contacts
//3. Copy the _id value from one contact and use it to do a GET /api/contacts/:id

dotenv.config();

const app = express();

const port = process.env.PORT;
//configure body-parser
app.use(bodyParser.json());
app.use('/api/contacts', contactsRouter);
app.listen(port, () => {
  console.info(`Server running at ${port}`);
});