import React, { useState, forwardRef } from 'react';

function Input({ id, label, type = 'text' }, ref) {
  const [inputVal, setInputVal] = useState('');
  const inputChangeHandler = e => {
    setInputVal(e.target.value);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        ref={ref}
        type={type}
        value={inputVal}
        onChange={inputChangeHandler}
        className='ml-3 border rounded'
      />
    </div>
  );
}

export default forwardRef(Input);
