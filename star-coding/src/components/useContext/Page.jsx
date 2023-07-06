import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function Page() {
  return (
    <div className='page'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
