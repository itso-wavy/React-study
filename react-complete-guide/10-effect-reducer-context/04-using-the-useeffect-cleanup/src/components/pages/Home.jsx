import React, { useState, useEffect } from 'react';
import Header from '../UI/Header';
import Main from '../UI/Main.jsx';
import LoginForm from '../components/LoginForm.jsx';

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    JSON.parse(localStorage.getItem('isLogin'))
      ? setIsLogin(true)
      : logoutHandler();
  }, []);

  const loginHandler = () => {
    localStorage.setItem('isLogin', true);
    setIsLogin(true);
  };
  const logoutHandler = () => {
    localStorage.setItem('isLogin', false);
    setIsLogin(false);
  };
  return (
    <>
      <Header isLogin={isLogin} onLogout={logoutHandler} />
      <Main>
        {!isLogin ? <LoginForm loginHandler={loginHandler} /> : <p>WELCOME!</p>}{' '}
      </Main>
    </>
  );
};

export default Home;
