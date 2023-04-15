import useNetwork from './hooks/useNetwork';

const App = () => {
  const onChange = online => (online ? 'ONLINE' : 'OFFLINE');
  const isOnline = useNetwork(onChange);

  return (
    <>
      <h1>you are {onChange(isOnline)}</h1>
    </>
  );
};

export default App;
