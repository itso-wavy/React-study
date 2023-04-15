import { useState, useEffect } from 'react';

const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  useEffect(() => {
    document.querySelector('title').innerText = 'wavy - ' + title;
  }, [title]);
  return setTitle;
};

export default useTitle;
