import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="main">
      <div className="card">
        <h1>{count}</h1>
        <div className="btn">
          <button onClick={increment}>Increment</button>
          <button onClick={reset}>Reset</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
