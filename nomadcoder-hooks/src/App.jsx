import useInput from './hooks/useInput';

const App = () => {
  const validator = value => value.length < 10;
  const input = useInput('wavy', validator);

  return (
    <>
      <input type='text' value={input.value} onChange={input.onChange} />
    </>
  );
};

export default App;
