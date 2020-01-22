import React, { useState, useReducer } from "react";
import { ProfileContext } from "./profileContext";

//https://hswolff.com/blog/how-to-usecontext-with-usereducer/

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "age":
      return { ...state, age: action.payload };
    default:
      throw new Error();
  }
};

const ProfileContextProvider = ({ children }) => {
  const initialState = {
    name: "NA",
    age: 0
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProfileContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
