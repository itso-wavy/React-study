import React from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ title, children, modalCloseHandler }) {
  return ReactDOM.createPortal(
    modalContent({ title, children, modalCloseHandler }),
    document.getElementById('modal-root')
  );
}

const modalContent = ({ title, children, modalCloseHandler }) => {
  const handleModalClick = e => {
    e.stopPropagation();
  };

  return (
    <div
      className='h-5/6 w-screen z-10 absolute top-0 flex justify-center items-center ab'
      onClick={modalCloseHandler}
    >
      <div className='bg-white rounded-lg p-10' onClick={handleModalClick}>
        <h1 className='text-3xl mb-10'>{title}</h1>
        <p>{children}</p>
      </div>
    </div>
  );
};
