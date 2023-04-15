import useClick from './hooks/useClick';

const App = () => {
  const onClickBtn = e => {
    const input = e.target.previousSibling;
    if (!input.value) input.focus();
    else input.value = "I'm fine. thank you. and you? 👼";
  };
  const ref = useClick(onClickBtn);

  return (
    <>
      <input type='text' placeholder='how are you? :)' />
      <button ref={ref}>get answer</button>
    </>
  );
};

export default App;
