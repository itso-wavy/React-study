import React, { useState } from 'react';
import Header from '../UI/Header';
import Main from '../UI/Main.jsx';
import LoginForm from '../components/LoginForm.jsx';

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);
  const logoutHandler = () => {
    setIsLogin(false);
  };
  return (
    <>
      <Header isLogin={isLogin} onLogout={logoutHandler} />
      <Main>
        {!isLogin ? <LoginForm setIsLogin={setIsLogin} /> : <p>WELCOME!</p>}{' '}
      </Main>
    </>
  );
};

export default Home;
