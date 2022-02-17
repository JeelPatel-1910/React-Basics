import classes from "./Form.module.css";
import { useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({
  value,
  setValue,
  todos,
  setTodos,
  updatedTask,
  setUpdatedTask,
}) => {
  const formData = useRef();
  // const updatedTodo = (id, task, completed) => {
  //   const newTodo = todos.map((todo) =>
  //     todo.id === id ? (id, task, completed) : todo
  //   );
  //   setTodos(newTodo);
  //   setUpdatedTask("");
  // };

  useEffect(() => {
    if (updatedTask) {
      setValue(updatedTask.task);
    } else {
      setValue("");
    }
  }, [setValue, updatedTask]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let TaskName = formData.current.value;

    if (!updatedTask) {
      setTodos([{ id: uuidv4(), task: TaskName, completed: false }, ...todos]);
    } else {
      setTodos(
        todos.map((item) => {
          if (item.id === updatedTask.id) {
            return { ...item, task: TaskName };
          }
          return item;
        })
      );
      //updatedTodo(updatedTask.id, TaskName, updatedTask.completed);
    }
    setValue("");
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const icon = updatedTask ? (
    <i className="fa fa-edit"></i>
  ) : (
    <i className="fas fa-plus"></i>
  );
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <input
        key={uuidv4()}
        ref={formData}
        type="text"
        className={classes.input}
        value={value}
        placeholder="Add a new task"
        onChange={onChangeHandler}
      />
      <button type="submit" className={classes.btn}>
        {icon}
      </button>
    </form>
  );
};

export default Form;
