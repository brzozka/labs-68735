import express from 'express';
import tasksRouter from './tasks.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, welcome to my assigment');
});

app.use('/api/tasks', tasksRouter);


app.listen(4000, () => {
    console.log('This app is listining at http://localhost:4000');
});