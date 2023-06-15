import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from '../components/MainHeader';
Outlet;

const RootLayout = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader showModalHandler={showModalHandler} />
      <Outlet modalIsVisible={modalIsVisible} />
    </>
  );
};

export default RootLayout;
