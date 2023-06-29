import { useDispatch, useSelector, connect } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.count);

  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({ type: 'plus', payload: 1 });
  };
  const increment5Handler = () => {
    dispatch({ type: 'plus', payload: 5 });
  };
  const decrementHandler = () => {
    dispatch({ type: 'minus' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler}>+1</button>
      <button onClick={increment5Handler}>+5</button>
      <button onClick={decrementHandler}>-1</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
/*  클래스형 컴포넌트의 경우 hook이 아닌 커넥트 함수 사용

const mapStateToProps = state => {
  return {
    counter: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    plus: () => dispatch({type: 'plus'}),
    minus: () => dispatch({type: 'minus'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter); */
