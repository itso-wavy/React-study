import { useState } from 'react';

const useTabs = (initialIndex, contents) => {
  const [index, setIndex] = useState(initialIndex);
  if (!contents || !Array.isArray(contents)) return;
  return {
    section: contents[index],
    changeItem: setIndex,
  };
};

export default useTabs;
