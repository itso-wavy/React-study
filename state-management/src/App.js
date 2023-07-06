import ZCounter from './zustand/ZCounter';
import { CountProvider } from './useContext/context/CounterContext';
import CCounter from './useContext/CCounter';
import RCounter from './useReducer/RCounter';
import RTodo from './useReducer/RTodo';
import ITodo from './useReducer/useImmerReducer/ITodo';

export default function App() {
  return (
    <>
      <ZCounter />
      <CountProvider>
        <CCounter />
      </CountProvider>
      <RCounter />
      <RTodo />
      <ITodo />
    </>
  );
}
