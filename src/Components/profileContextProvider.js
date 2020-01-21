import React, { useState } from "react";
import { ProfileContext } from "./profileContext";

const ProfileContextProvider = ({ children }) => {
  const initialState = {
    name: "NA",
    age: 0
  };
  const [profile, setProfile] = useState(initialState);

  const handleUpdateProfile = entity => {
    console.log(entity);
    setProfile({ ...profile, ...entity });
  };

  return (
    <ProfileContext.Provider value={{ ...profile, handleUpdateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
