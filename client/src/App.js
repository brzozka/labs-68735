import {useState} from 'react';
import TodoItem from './TodoItem.js';
import TodoForm from './TodoForm.js';



function App() {
  const [tasks, setTasks] = useState ([
    {
      id: 1,
      title: 'Task 1',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Task 2',
      isCompleted: true
    }

  ])

  const setCompleted = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id !== id) {
          return task;
      } 
      return {
          ...task,
          isCompleted: !task.isCompleted 
      };

      }),
    );
  };
  
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  
  const addTask = (title) => {
    setTasks([
      ...tasks,
      {
        id: Math.round(Math.random() * 1000),
        title: title,
        isCompleted: false,

      }
    ])
  };
  
  return (
  <div className="app"> 
    <h1>My ToDo App</h1>
    <TodoForm addTask={addTask} />
    
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem 
          key={task.id}
          title={task.title}
          isCompleted={task.isCompleted}
          onCompleted={ () => {setCompleted(task.id)}}
          onDelete={ () => {deleteTask(task.id)}} />
      ))}
    </div>
    
    
    

  </div>
  );
}

export default App;
