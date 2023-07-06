import './useContext.css';
import Page from '../components/useContext/Page';
import ThemeCtxProvider from '../context/ThemeContext';
import UserCtxProvider from '../context/UserContext';

export default function UseContext() {
  return (
    <>
      <h1>useContext</h1>
      <UserCtxProvider>
        <ThemeCtxProvider>
          <Page />
        </ThemeCtxProvider>
      </UserCtxProvider>
    </>
  );
}
