import React, { useState } from "react";

import UsersList from "./Users/UsersList";
import AddUser from "./Users/AddUser";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAdduser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
