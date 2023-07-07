import { createContext, useState } from 'react';

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
        {props.children}
      </AdminFlagContext.Provider>
    </>
  );
};
