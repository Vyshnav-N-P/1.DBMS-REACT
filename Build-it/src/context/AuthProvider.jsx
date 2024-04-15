import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  // Load authentication data from localStorage on component mount
  const [auth, setAuth] = useState(() => {
    const storedAuthData = localStorage.getItem("authData");
    return storedAuthData ? JSON.parse(storedAuthData) : null;
  });

  // Save authentication data to localStorage when it changes
  useEffect(() => {
    if (auth) {
      localStorage.setItem("authData", JSON.stringify(auth));
    } else {
      localStorage.removeItem("authData");
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
