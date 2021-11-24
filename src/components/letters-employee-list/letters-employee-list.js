import React, { useEffect, useState } from "react";
import User from "../user/user";
import "./letters-employee-list.css";
const LettersEmployeeList = (props) => {
  const [alphabetUsersList, setAlphabetUsersList] = useState(null);

  useEffect(() => {
    const alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const createAlphabetUser = () => {
      if (props.users !== null) {
        return alphabet.map((letter) => {
          let suitableEmployees = props.users
            .filter((user) => user["firstName"][0] === letter)
            .sort((a, b) => {
              if (a["firstName"] > b["firstName"]) {
                return 1;
              }
              if (a["firstName"] < b["firstName"]) {
                return -1;
              }
              return 0;
            });
          let newItem = {};
          newItem[letter] = suitableEmployees;
          return newItem;
        });
      }
    };
    setAlphabetUsersList(createAlphabetUser());
  }, [props.users]);
  const renderLetters = () => {
    if (alphabetUsersList !== null && alphabetUsersList !== undefined) {
      return alphabetUsersList.map((item) => {
        return (
          <li key={Object.keys(item)[0]} className="one-letter-content-wrapper">
            <span className="letter">{Object.keys(item)[0]}</span>
            {Object.values(item)[0].length === 0 ? (
              <span>
                <br />
                No Employees
              </span>
            ) : null}
            <ul className="list-unstyled">
              {Object.values(item)[0].map((user) => {
                return (
                  <li key={user["id"]}>
                    <User
                      changeSelectedValues={props.changeSelectedValue}
                      user={user}
                    />
                  </li>
                );
              })}
            </ul>
          </li>
        );
      });
    }
  };
  return <ul className="list-unstyled letters-wrapper">{renderLetters()}</ul>;
};
export default LettersEmployeeList;
