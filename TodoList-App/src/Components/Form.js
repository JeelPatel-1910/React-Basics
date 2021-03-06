import classes from "./Form.module.css";
import { useRef } from "react";
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
    }
    setUpdatedTask("");
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
