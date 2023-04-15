import usePreventLeave from './hooks/usePreventLeave';

const App = () => {
  const { enablePrevent, diablePrevent } = usePreventLeave();

  return (
    <>
      <p>선택 후 새로고침🔄</p>
      <button onClick={enablePrevent}>protect</button>
      <button onClick={diablePrevent}>unprotect</button>
    </>
  );
};

export default App;
