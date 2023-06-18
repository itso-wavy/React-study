import React from 'react';
import Header from '../UI/Header';
import Main from '../UI/Main.jsx';
import LoginForm from '../components/LoginForm.jsx';

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <LoginForm />
      </Main>
    </>
  );
};

export default Home;
