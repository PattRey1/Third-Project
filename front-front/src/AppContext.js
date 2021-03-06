import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialUserState = JSON.parse(localStorage.getItem("user")) || {};
  const [user, setUser] = useState(initialUserState);
  const [posts, setPosts] = useState([]);

  const resetContext = () => {
    setUser({});
  };

  return (
    <AppContext.Provider
      value={{ user, setUser, resetContext, posts, setPosts }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
