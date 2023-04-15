import useFadeIn from './hooks/useFadeIn';

const App = () => {
  const fadeInH1 = useFadeIn(1, 0);
  return (
    <>
      <h1 {...fadeInH1}>Hello world!</h1>
    </>
  );
};

export default App;
