import dotenv from 'dotenv';
import express from 'express';
import contactsRouter from './api/contacts/index-async.js';
import bodyParser from 'body-parser';
import './db';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import fs from  'fs';

//simple router. Suggested useage
//1. Add contacts using POST /api/contacts
//2. Do a GET /api/contacts to see the list of added contacts
//3. Copy the _id value from one contact and use it to do a GET /api/contacts/:id

// create a write stream (in append mode) for logging
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });


// General error handler
const errHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  });
};

dotenv.config();

const app = express();
//Set up default helmet security
app.use(helmet());
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));

const port = process.env.PORT;
//configure body-parser
app.use(bodyParser.json());
app.use('/api/contacts', contactsRouter);
app.use(errHandler);
app.listen(port, () => {
  console.info(`Server running at ${port}`);
});