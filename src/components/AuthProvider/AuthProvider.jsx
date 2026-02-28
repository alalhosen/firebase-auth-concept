import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    registerUser,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
