import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.static('public'));

app.get('/api/movies', (req,res)=>(res.end("I  should return a JSON collection of Movies!")));
app.get('/api/movies/:id', (req,res)=>(res.end("I  should return the movie with id: " + req.params.id)));
app.post('/api/movies', (req,res)=>(res.end("I should process the body of this request")));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});