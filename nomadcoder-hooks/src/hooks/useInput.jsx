import { useState } from 'react';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  let willChange = true;
  willChange = typeof validator === 'function' && validator(value);
  const onChange = e => {
    if (willChange) setValue(e.target.value);
  };
  return { value, onChange };
};
export default useInput;
