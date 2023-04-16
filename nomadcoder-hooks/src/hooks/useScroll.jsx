import { useState, useEffect } from 'react';

const useScroll = () => {
  const [scroll, setScroll] = useState({
    x: 0,
    y: 0,
  });
  const handleScroll = () => {
    setScroll({
      x: window.scrollX,
      y: window.scrollY,
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // return e.target.removeEventListener('scroll', handleScroll)
  }, []);

  return scroll;
};

export default useScroll;
