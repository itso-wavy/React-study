import { createContext, useState } from 'react';

export const UserContext = createContext(null);

const UserCtxProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const value = { username, setUsername };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserCtxProvider;
