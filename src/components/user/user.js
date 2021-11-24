import React, { useState } from "react";
import "./user.css";
const User = ({ user, changeSelectedValues }) => {
  const [selected, setSelected] = useState(user["selected"]);
  const handleChange = (e) => {
    setSelected(e.target.value === "Selected" ? true : false);
    changeSelectedValues(user["id"], !selected);
  };
  const userNameColorStyle =
    selected === true
      ? "selected-username-color"
      : "not-selected-username-color";
  return (
    <div className="user-wrapper">
      <div>
        <span className={userNameColorStyle}>{user["firstName"]} </span>
        <span className={userNameColorStyle}>{user["lastName"]}</span>
      </div>
      <div>
        <form className="radiobumttons-wrapper">
          <input
            type="radio"
            value="Selected"
            id="1"
            onChange={handleChange}
            name="selectedOrNot"
            checked={selected === true}
          />
          <label htmlFor="selected">active</label>

          <input
            type="radio"
            value="notSelected"
            id="2"
            onChange={handleChange}
            name="selectedOrNot"
            checked={selected === false}
          />
          <label htmlFor="notSelected">not active</label>
        </form>
      </div>
    </div>
  );
};
export default User;
