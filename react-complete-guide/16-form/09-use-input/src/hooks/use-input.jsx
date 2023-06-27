import { useState } from 'react';

export default function useInput(validateFn) {
  // 검증로직이 외부에서 전달되어야 함 = props.validFn
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateFn(enteredValue);
  const showValueErrMsg = !valueIsValid && isTouched;

  const valueChangeHandler = e => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: showValueErrMsg,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
}
