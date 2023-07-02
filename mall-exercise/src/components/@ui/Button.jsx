import React from 'react';

export default function Button({ size = 'sm', children, onClick }) {
  let adjustedSize;

  switch (size) {
    case 'lg':
      adjustedSize = 'px-3 py-1 text-4xl rounded-lg';
      return;
    case 'md':
      adjustedSize = 'px-3 py-1 text-2xl rounded-lg';
      return;
    default:
      adjustedSize = 'px-3 py-1';
  }

  return (
    <button
      className={`${adjustedSize} bg-amber-300 rounded-md hover:bg-amber-200 focus:bg-amber-400 focus:ring-2 ring-amber-200 ring-offset-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
