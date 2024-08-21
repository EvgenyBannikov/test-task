import React, { useState, useEffect } from "react";
import Table from "./Table";

const Users = ({ usersResponse }) => {
  const [src, setSrc] = useState();
  const [foundUser, setFoundUser] = useState();

  const columns = {
    name: {
      path: ["lastName", "firstName", "maidenName"],
      name: "ФИО",
    },
    age: { path: "age", name: "Возраст" },
    gender: { path: "gender", name: "Пол" },
    phone: { path: "phone", name: "Номер телефона" },
    address: {
      path: ["address.city", "address.address"],
      name: "Адрес",
    },
  };

  const handleChange = (event) => {
    setSrc(
      event.target.value !== ""
        ? "https://dummyjson.com/users/filter?key=firstName&value=" +
            event.target.value
        : undefined
    );
  };

  useEffect(() => {
    if (src) {
      fetch(src)
        .then((res) => res.json())
        .then((data) => setFoundUser(data.users));
    } else {
      setFoundUser(undefined);
    }
  }, [src]);

  return (
    <div className="wrapper">
      <label>Поиск</label>
      <form className="search_form">
        <input type="text" onChange={handleChange} />
      </form>
      {foundUser ? (
        <Table usersResponse={foundUser} columns={columns} />
      ) : (
        <Table usersResponse={usersResponse} columns={columns} />
      )}
    </div>
  );
};

export default Users;
