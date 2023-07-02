import React, { useState } from 'react';
import Modal from '../components/@ui/Modal';

export default function ContactPage() {
  const [isModalShowed, setIsModalShowed] = useState(false);

  const modalOpenHandler = () => {
    setIsModalShowed(true);
  };
  const modalCloseHandler = () => {
    setIsModalShowed(false);
  };
  return (
    <div className='h-screen bg-emerald-100 flex flex-col pt-28 items-center'>
      <p>hi, i'm wavy!👋</p>
      <p>my email is...</p>
      <button
        onClick={modalOpenHandler}
        className='w-fit p-3 bg-amber-300 rounded-md'
      >
        click!
      </button>
      {isModalShowed && (
        <Modal modalCloseHandler={modalCloseHandler} title='contact'>
          you.meet.vvavy@gmail.com
        </Modal>
      )}
    </div>
  );
}
