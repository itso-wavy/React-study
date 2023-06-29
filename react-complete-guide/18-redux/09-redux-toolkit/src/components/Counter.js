import { useDispatch, useSelector, connect } from 'react-redux';
import classes from './Counter.module.css';
import store, { counterActions } from '../store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.count);
  const isShow = useSelector(state => state.isShow);

  const incrementHandler = () => {
    dispatch(counterActions.increase(1));
    // {type: SOME_UNIQUE_IDENTIFIER, payload: 1}
  };
  const increment5Handler = () => {
    dispatch(counterActions.increase(5));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrease());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      {isShow && (
        <div>
          <div className={classes.value}>{counter}</div>
          <button onClick={incrementHandler}>+1</button>
          <button onClick={increment5Handler}>+5</button>
          <button onClick={decrementHandler}>-1</button>
        </div>
      )}
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
