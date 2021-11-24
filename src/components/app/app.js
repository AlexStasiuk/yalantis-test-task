import React, { useState, useEffect } from "react";
import "./app.css";
import LettersEmployeeList from "../letters-employee-list/letters-employee-list";
import BirthdaysBlock from "../birthdays-block/birthdays-block";

const Main = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    async function fetchMyAPI() {
      let mayNewUsers = JSON.parse(localStorage.getItem("allUsers"));
      if (mayNewUsers !== null) {
        setUsers(mayNewUsers);
        console.log("2");
      } else {
        console.log("1");
        let response = await fetch(
          "https://yalantis-react-school-api.yalantis.com/api/task0/users"
        );
        response = await response.json();

        response.forEach((item) => {
          item["selected"] = false;
        });
        setUsers(mayNewUsers);
      }
    }
    fetchMyAPI();
  }, []);

  const changeSelectedValue = (id, newValue) => {
    const index = users.findIndex((item) => item["id"] === id);
    const item = { ...users[index], selected: newValue };
    const newUsers = [
      ...users.slice(0, index),
      item,
      ...users.slice(index + 1),
    ];
    setUsers(newUsers);
    localStorage.setItem("allUsers", JSON.stringify(newUsers));
  };
  return (
    <div className="app-wrapper">
      <div className="employees-by-letter-wrapper">
        <h1>Employees</h1>
        <LettersEmployeeList
          changeSelectedValue={changeSelectedValue}
          users={users}
        />
      </div>
      <div className="employees-birthdays-wrapper">
        <h1>Employees birthdays</h1>
        <BirthdaysBlock users={users} />
      </div>
    </div>
  );
};
export default Main;
