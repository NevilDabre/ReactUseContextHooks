import React, { useState } from "react";
import "../styles.css";
import { ProfileContext } from "./profileContext";

const Name = props => {
  const [userName, setUserName] = useState("");

  const handleNameChange = event => {
    setUserName(event.target.value);
  };

  return (
    <ProfileContext.Consumer>
      {context => {
        const { name, handleUpdateProfile } = context;
        return (
          <div className="holder">
            <span>Name:</span>
            <input
              type="text"
              name="name"
              value={userName}
              onChange={handleNameChange}
            />
            <button
              type="button"
              onClick={() => handleUpdateProfile({ name: userName })}
            >
              Update Name
            </button>
          </div>
        );
      }}
    </ProfileContext.Consumer>
  );
};

export default Name;
