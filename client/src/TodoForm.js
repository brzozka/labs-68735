function TodoForm({ addTask }) {
    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      
    
      addTask(event.target.title.value);
      form.reset();
      
    };
  
    return (
      <form className="todo-form" onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Add new task…" />
      </form>
    );
  }
  
  export default TodoForm;