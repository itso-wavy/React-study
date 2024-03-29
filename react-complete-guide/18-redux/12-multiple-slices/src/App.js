import { useSelector } from 'react-redux';
import Header from './components/Header';
import Auth from './components/Auth';
import Counter from './components/Counter';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      <Counter />
    </>
  );
}

export default App;
