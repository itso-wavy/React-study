const usePreventLeave = () => {
  const listener = e => {
    e.preventDefault();
    e.returnValue = '';
  };
  const enablePrevent = () => window.addEventListener('beforeunload', listener);
  const diablePrevent = () =>
    window.removeEventListener('beforeunload', listener);

  return { enablePrevent, diablePrevent };
};

export default usePreventLeave;
