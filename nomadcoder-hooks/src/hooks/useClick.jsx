import { useEffect, useRef } from 'react';

const useClick = onClick => {
  const ref = useRef();
  useEffect(() => {
    const element = ref.current;
    if (typeof onClick === 'function' && element)
      element.addEventListener('click', onClick);
    return () => {
      if (element) element.removeEventListener('click', onClick);
    };
  }, [onClick]);
  if (typeof onClick !== 'function') return;
  return ref.current;
};

export default useClick;
