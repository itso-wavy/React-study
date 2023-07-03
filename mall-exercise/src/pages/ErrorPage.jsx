import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  const navigate = useNavigate();
  const backBtnHandler = () => {
    navigate('..');
  };

  return (
    <div className='h-screen flex flex-col justify-center items-center bg-indigo-50'>
      <p className='text-3xl mb-3'>error!</p>
      <p className='text-xl mb-5'>
        {error.status === 500 ? error.data.message : 'someting strange...'}
      </p>
      <button
        type='button'
        className='bg-amber-300 rounded-md px-3 py-1 hover:bg-amber-200 focus:bg-amber-400 focus:ring-2 ring-amber-200 ring-offset-2'
        onClick={backBtnHandler}
      >
        back
      </button>
    </div>
  );
}
