import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [storedUserData, setStoredUserData] = useState(null);

  return (
    <UserContext.Provider value={{ storedUserData, setStoredUserData }}>
      {children}
    </UserContext.Provider>
  );
};
