import express from 'express';
import mongodb from 'mongodb';
import {getCollection} from './db.js';

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
router.get('/', async (req, res) => {
  const taskCollection = getCollection('tasks');
  
  const taskDoc = await taskCollection.find({}).toArray();
    
    res.send(taskDoc);
  });
  
router.post('/', async (req, res) => {
    
    const taskCollection = getCollection('tasks');
    const newTask = req.body;
    try {
      await taskCollection.insertOne(newTask);
      res.status(201).send('Task added!');
    } catch (e) {
      res.status(500).send('Unknown error');
    }
    
  });
  
router.get('/:id', async (req, res) => {
  const taskCollection = getCollection('tasks');
  const taskID  = mongodb.ObjectID(req.params.id);
  const task = await taskCollection.findOne({_id: taskID });
  


    if(task) {
        res.send(task);
    } else {
        res.status(404).send('Task not found');
    }

  });
router.delete('/:id', async (req, res) => {
    const taskCollection = getCollection('tasks');
    const taskID  = mongodb.ObjectID(req.params.id);
    const task = await taskCollection.deleteOne({_id : taskID});

    if(task){
    res.send('DELETE request completed')
    }else {
        res.status(404).send('Task with this Id not found')
    }
});


export default router;