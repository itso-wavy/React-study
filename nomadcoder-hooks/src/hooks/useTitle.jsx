import { useEffect } from 'react';

const useTitle = (service, title) => {
  useEffect(() => {
    document.querySelector('title').textContent = title
      ? `${service} - ${title}`
      : service;
  }, []);
};

export default useTitle;
