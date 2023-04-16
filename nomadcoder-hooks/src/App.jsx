import useScroll from './hooks/useScroll';

const App = () => {
  const { y } = useScroll();

  return (
    <div style={{ height: '500vh' }}>
      <h1
        style={{
          position: 'fixed',
          textAlign: 'center',
          color: y < 500 ? 'green' : 'gold',
        }}
      >
        hello!
      </h1>
    </div>
  );
};

export default App;
