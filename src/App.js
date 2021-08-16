import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import UserList from "./UserList.js";

function App() {
  const [listOfUsers, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });
  });

  return <UserList listOfUsers={listOfUsers} />;
}

export default App;
