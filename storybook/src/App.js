import { useState, useEffect } from 'react';
import ContextTester from './components/ContextTester.jsx';
import ModuleTester from './components/ModuleTester.jsx';
import TodoList from './components/TodoList.jsx';
import CoinTracker from './components/CoinTracker.jsx';
const UseEffectTester = () => {
  useEffect(() => {
    console.log('created:)');
    return () => console.log('destroyed:('); // clean up
  }, []);
  return <h1>useEffect</h1>;
};

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter(prev => prev + 1);
    setShowing(!showing);
  };
  // const [keyword, setKeyword] = useState('');
  // useEffect(() => {
  //   console.log('🥇');
  // }, []);
  // useEffect(() => {
  //   console.log('🥈counter');
  // }, [counter]);
  // useEffect(() => {
  //   console.log('🥉counter, keyword');
  // }, [counter, keyword]);

  const [showing, setShowing] = useState(true);
  return (
    <>
      <ContextTester />
      <ModuleTester />
      {showing ? <UseEffectTester /> : null}

      <h2>{counter}</h2>
      <button onClick={onClick}>click me</button>
      <hr />
      <TodoList />
      <hr />
      <CoinTracker />
    </>
  );
}

export default App;
