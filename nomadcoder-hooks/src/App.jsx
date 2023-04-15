import useBeforeLeave from './hooks/useBeforeLeave';

const App = () => {
  const handle = e => {
    e.clientY <= 0 && alert("Wait! I'll give you a discount");
  };
  useBeforeLeave(handle);

  return (
    <>
      <p>마우스를 브라우저 바깥으로 이동해보세요.</p>
    </>
  );
};

export default App;
