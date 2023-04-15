import { useEffect, useRef } from 'react';

const useFadeIn = (duration = 1, delay = 0) => {
  const ref = useRef();
  useEffect(() => {
    if (typeof duration !== 'number' || typeof delay !== 'number') return;
    else if (ref.current) {
      const element = ref.current;
      element.style.transition = `opacity ${duration}s ease-in ${delay}s`;
      element.style.opacity = 1;
    }
  }, []);
  return { ref, style: { opacity: 0 } };
};

export default useFadeIn;
