import "./TaskItem.css";

const TaskItem = ({ setValue, todos, setTodos, setUpdatedTask }) => {
  const deleteHandler = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const EditHandler = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setUpdatedTask(findTodo);
    setValue(findTodo.task);
    console.log(findTodo);
  };
  const completeHandler = (todo) => {
    let changedTodo = todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    const sorted = changedTodo.sort((a, b) => a["completed"] - b["completed"]);
    setTodos(sorted);
  };

  return (
    <div className="task">
      {todos.map((todo) => (
        <li className="todo" key={todo.id}>
          <input
            type="text"
            value={todo.task}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(e) => e.preventDefault()}
          />
          <div className="actions">
            <button
              className="btn-complete task-btn"
              onClick={() => completeHandler(todo)}
            >
              <i className="fa fa-check-circle"></i>
            </button>

            <button
              className="btn-edit task-btn"
              onClick={() => EditHandler(todo)}
            >
              <i className="fa fa-edit"></i>
            </button>

            <button
              className="btn-delete task-btn"
              onClick={() => deleteHandler(todo)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TaskItem;

