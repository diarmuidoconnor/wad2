import express from 'express';
import contactsRouter from './api/contacts/index.js';

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
// parse application/json bodies(only parse when content-type = application/json)
app.use(express.json())
// parse form/url encoded bodies(only parse when content-type =  application/x-www-form-urlencoded’ )
app.use(express.urlencoded({extended:true}))

app.get('/', (req,res)=>{res.end('All Good!')});
app.use('/api/contacts', contactsRouter)
app.use(errorHandler1)

app.listen(8080, () => {
  console.info('Express listening on port', 8080);
});