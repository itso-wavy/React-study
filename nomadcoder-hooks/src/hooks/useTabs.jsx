import { useState } from 'react';

const useTabs = (initialIndex, contents) => {
  const [index, setIndex] = useState(initialIndex);
  if (!contents || !Array.isArray(contents)) return;
  return { tab: contents[index], selectTab: setIndex };
};

export default useTabs;
