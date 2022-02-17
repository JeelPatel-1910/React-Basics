import Form from "./Form";
import classes from "./Home.module.css";
import { useState } from "react";
import TaskItem from "./TaskItem";

const Home = (props) => {
  const [value, setValue] = useState("");
  const [updatedTask, setUpdatedTask] = useState(null);
  const [todos, setTodos] = useState([]);

  return (
    <div className={classes.container}>
      <div className={classes.Card}>
        <h1>To-do-List</h1>
        <div className={classes.box}>
          <Form
            //onAddTask={onAddTaskHandler}
            value={value}
            setValue={setValue}
            todos={todos}
            setTodos={setTodos}
            updatedTask={updatedTask}
            setUpdatedTask={setUpdatedTask}
          />
          <div>
            <TaskItem
              setValue={setValue}
              todos={todos}
              setTodos={setTodos}
              setUpdatedTask={setUpdatedTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
