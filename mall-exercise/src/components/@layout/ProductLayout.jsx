import React from 'react';
import { Outlet } from 'react-router-dom';

export default function ProductLayout() {
  return (
    <>
      <div className='bg-indigo-100 p-8'>
        <Outlet />
      </div>
    </>
  );
}
