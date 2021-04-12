import TodoItem from './TodoItem.js';
import TodoForm from './TodoForm.js';


function App() {
  return (
  <div className="app"> 
    <h1>My ToDo App</h1>
    <TodoForm />
    <TodoItem title="Item 1" />
    <TodoItem title="Item 2" isCompleted />
    <TodoItem title="Item 3" />
    
    
    

  </div>
  );
}

export default App;
