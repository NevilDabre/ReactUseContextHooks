import React from "react";
import { ProfileContext } from "./profileContext";

const GlobalProfile = () => {
  return (
    <ProfileContext.Consumer>
      {context => {
        const { name, age } = context;
        return (
          <div className="holder">
            <h2>Name: {name}</h2>
            <h3>Age: {age}</h3>
          </div>
        );
      }}
    </ProfileContext.Consumer>
  );
};

export default GlobalProfile;
