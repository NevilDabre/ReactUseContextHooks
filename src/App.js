import React from "react";
import "./styles.css";
import Name from "./Components/name";
import Age from "./Components/age";
import ProfileContextProvider from "./Components/profileContextProvider";
import GlobalProfile from "./Components/globalProfile";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <ProfileContextProvider>
          <Name />
          <br />
          <Age />
          <GlobalProfile />
        </ProfileContextProvider>
      </div>
    </div>
  );
}
