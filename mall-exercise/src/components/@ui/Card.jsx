import React from 'react';

export default function Card({ children }) {
  return (
    <div className='p-4 flex flex-col gap-2 rounded-md shadow-md max-w-sm'>
      {children}
    </div>
  );
}
