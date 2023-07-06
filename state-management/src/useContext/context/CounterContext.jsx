import { createContext, useState } from 'react';

export const CountContext = createContext({
  count: 0,
  increase: () => {},
  decrease: () => {},
});

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count => count + 1);
  const decrease = () => setCount(count => count - 1);

  const value = { count, increase, decrease };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};
