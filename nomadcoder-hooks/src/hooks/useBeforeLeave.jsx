import { useEffect } from 'react';

const useBeforeLeave = handle => {
  useEffect(() => {
    if (typeof handle !== 'function') return;
    document.addEventListener('mouseleave', handle);
    // return document.removeEventListener('mouseleave', handle);
  }, []);
};

export default useBeforeLeave;
