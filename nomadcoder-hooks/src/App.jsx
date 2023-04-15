import useTitle from './hooks/useTitle';

const App = () => {
  const setTitle = useTitle('home');
  setTimeout(() => {
    setTitle('detail');
  }, 3000);
  return (
    <>
      <p>happyHacking!</p>
    </>
  );
};

export default App;
