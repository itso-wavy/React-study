import { useEffect, useState } from 'react';

export default function useCounter(cb) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(cb);
    }, 1000);

    return () => clearInterval(interval);
  }, [cb]);

  return { counter };
}
