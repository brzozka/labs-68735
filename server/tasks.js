import express from 'express';

const router = express.Router();

const tasks = [
    {
      id: 'ID1',
      title: 'Do the assigment',
    },
    {
      id: 'ID2',
      title: 'Learn how to work with node',
    },
    {
      id: 'ID3',
      title: 'Try out some express.js',
    },
  ];
router.get('/', (req, res) => {
    res.status(200).send(tasks)
  });
  
router.post('/', (req, res) => {
    const newTask = req.body;

    tasks.push(newTask)

    res.status(201).send('Task succesfully created')
  });
  
router.get('/:id', (req, res) => {
    const task = tasks.find(task => task.id === req.params.id)


    if(task) {
        res.send(task);
    } else {
        res.status(404).send('Task not found');
    }

  });
router.delete('/:id', (req, res) => {
    const task = tasks.find(task => task.id === req.params.id)

    if(task){
    res.send('DELETE request completed')
    }else {
        res.status(404).send('Task with this Id not found')
    }
});


export default router;