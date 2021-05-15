import { Switch, Route, Link } from 'react-router-dom';

import TodoList from './TodoList';
import TodoView from './TodoView';

function App() {
  return (
    <div className="app">
      <h1>Todo App</h1>
      <hr />
      <Link to="/">Home</Link> | <Link to="/list">Todo list</Link>
      <hr />
      <Switch>
        <Route path="/list">
          <TodoList />
        </Route>
        <Route path="/task/:id">
          <TodoView />
        </Route>
        <Route path="/">
          <h3>Welcome to my Todo List App</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default App;