import express from 'express';
import contactsRouter from './api/contacts/index.js';
import bodyParser from 'body-parser';

const app = express();

const middleware1 = (req,res,next)=>{
  console.log('in middleware 1');
  //console.log(notDefined);
  next();
}

const errorHandler1=(err,req,res,next)=>{
  console.log('in error handler');
  console.log(err);
  res.status(500).end('something went wrong!');
}

app.use(middleware1)
// parse application/json
app.use(bodyParser.json())
app.get('/', (req,res)=>{res.end('All Good!')});
app.use('/api/contacts', contactsRouter)
app.use(errorHandler1)

app.listen(8080, () => {
  console.info('Express listening on port', 8080);
});