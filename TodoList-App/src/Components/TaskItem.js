//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TaskItem.css";

const TaskItem = ({ todos, setTodos, setUpdatedTask }) => {
  const deleteHandler = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const EditHandler = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setUpdatedTask(findTodo);
    console.log(findTodo);
  };
  const completeHandler = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="todo" key={todo.id}>
          <input
            key={todo.id}
            type="text"
            value={todo.task}
            className="list"
            onChange={(e) => e.preventDefault()}
          />
          <div className="actions">
            <button onClick={() => completeHandler(todo)}>
              <i className="fa fa-check-circle"></i>
            </button>
            <button onClick={() => EditHandler(todo)}>
              <i className="fa fa-edit"></i>
            </button>
            <button onClick={() => deleteHandler(todo)}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TaskItem;
