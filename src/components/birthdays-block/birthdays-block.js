import React, { useEffect, useState } from "react";
import "./birthdays-block.css";
const BirthdaysBlock = ({ users }) => {
  const [monthUsers, setMonthUsers] = useState(null);

  useEffect(() => {
    const monthes = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const createMonthUsers = () => {
      if (users !== null) {
        return monthes.map((month, indx, arr) => {
          let UsersBornThismonth = users
            .filter((user) => {
              return Number(user["dob"].split("-")[1]) === indx + 1;
            })
            .sort((a, b) => {
              if (a["lastName"] > b["lastName"]) {
                return 1;
              }
              if (a["lastName"] < b["lastName"]) {
                return -1;
              }
              return 0;
            });
          let newItem = {};
          newItem[month] = UsersBornThismonth;
          return newItem;
        });
      }
    };
    const getCurrentMonth = () => {
      const d = new Date();
      let month = d.getMonth();
      return month;
    };
    const turnMonthesIntoRightOrder = () => {
      if (users !== undefined && users !== null) {
        const currentMonth = getCurrentMonth();
        let rowData = createMonthUsers();
        let newRowData = [
          ...rowData.slice(currentMonth),
          ...rowData.slice(0, currentMonth),
        ];
        return newRowData;
      }
    };
    setMonthUsers(turnMonthesIntoRightOrder());
  }, [users]);

  const renderMonthUsers = () => {
    if (monthUsers !== null && monthUsers !== undefined) {
      let thereIsNoSelectedUsers =
        users.filter((elem) => elem["selected"] === true).length === 0 ? (
          <span className="employees-list-is-empty">
            Employees List is empty
          </span>
        ) : null;
      if (thereIsNoSelectedUsers !== null) {
        return thereIsNoSelectedUsers;
      }
      return monthUsers.map((item) => {
        return (
          <li key={Object.keys(item)[0]}>
            <span className="month-title">{Object.keys(item)[0]}</span>
            {Object.values(item)[0].length === 0 ? (
              <span className="no-employees-this-month">No Employees</span>
            ) : null}
            <ul>
              {Object.values(item)[0].filter(
                (elem) => elem["selected"] === true
              ).length === 0 ? (
                <span className="no-employees-this-month">No Employees</span>
              ) : null}
              {Object.values(item)[0]
                .filter((elem) => elem["selected"] === true)
                .map((user) => {
                  return (
                    <li key={user["id"]} className="full-user-info">
                      <span>
                        <b> {user["firstName"]}</b>
                      </span>
                      <span>
                        <b> {user["lastName"]}</b>
                      </span>
                      <span>
                        <b> {user["dob"]}</b>
                      </span>
                    </li>
                  );
                })}
            </ul>
          </li>
        );
      });
    }
  };
  return <ul className="list-unstyled">{renderMonthUsers()}</ul>;
};

export default BirthdaysBlock;
