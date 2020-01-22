import React, { useState } from "react";
import "../styles.css";
import { ProfileContext } from "./profileContext";

const Age = () => {
  const [userAge, setUserAge] = useState(0);

  const handleChange = event => {
    setUserAge(event.target.value);
  };
  return (
    <ProfileContext.Consumer>
      {context => {
        const { dispatch } = context;
        return (
          <div className="holder">
            <span>Age: </span>
            <input
              type="number"
              name="age"
              value={userAge}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => dispatch({ type: "age", payload: userAge })}
            >
              Update Age{" "}
            </button>
          </div>
        );
      }}
    </ProfileContext.Consumer>
  );
};
export default Age;
