import { useReducer } from 'react';

const ACTION_CREATOR = {
  INPUT: 'INPUT',
  BLUR: 'BLUR',
  RESET: 'RESET',
};

const initialInputState = {
  // useState으로 관리하는 상태들의 초깃값을 분리해둔 것
  value: '',
  isTouched: false,
};
// const [enteredValue, setEnteredValue] = useState('');
// const [isTouched, setIsTouched] = useState(false);

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case ACTION_CREATOR.INPUT:
      return { ...state, value: action.value };
    case ACTION_CREATOR.BLUR:
      return { ...state, isTouched: true };
    case ACTION_CREATOR.RESET:
      return { value: '', isTouched: false };
    default:
      return state;
  }
};

export default function useInput(validationFn) {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validationFn(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = e => {
    dispatch({ type: 'INPUT', value: e.target.value });
    // setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
    // setIsTouched(true);
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
    // setEnteredValue('');
    // setIsTouched(false);
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
}
