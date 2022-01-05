import "./styles.css";
import React from "react";

function nameReducer(previousName, newName) {
  return newName;
}

const initialNameValue = "Joe";

export default function NameInput() {
  const [name, setName] = React.useReducer(nameReducer, initialNameValue);
  const [firstName, setFirstName] = React.useState("lee");
  const handleChange = (event) => setName(event.target.value);
  const handleChange2 = (event) =>
    // callback함수에 event.target.value를 넣어주기위해서
    // 익명함수를 써야한다.
    setFirstName((previousFirstName) => {
      return event.target.value;
    });
  return (
    <>
      <label>
        Name: <input defaultValue={name} onChange={handleChange} />
      </label>
      <div>You typed: {name}</div>
      <label>
        First Name: <input defaultValue={firstName} onChange={handleChange2} />
      </label>
      <div>You typed: {firstName}</div>
    </>
  );
}
