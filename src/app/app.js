import React, { useState, useEffect } from "react";
import Users from "./components/Users";

function App() {
  const [usersResponse, setUsers] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <>
      <Users usersResponse={usersResponse} />
    </>
  );
}
export default App;
