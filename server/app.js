import express from 'express';
import tasksRouter from './tasks.js';
import client from './db.js';
import cors from 'cors';




const app = express();

app.use(cors());
app.use(express.json());

app.listen(4000, async () => {
  console.log('Server is ready');

  await client.connect();
  console.log('Database is ready');
});

app.get('/', (req, res) => {
    res.send('Hello, welcome to my assigment');
});

app.use('/api/tasks', tasksRouter);


