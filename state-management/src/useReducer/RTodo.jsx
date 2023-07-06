import { useReducer } from 'react';

const initialState = {
  draft: '',
  todos: [],
};

const ACTION = {
  CHANGE: 'CHANGE',
  ADD: 'ADD',
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTION.CHANGE:
      return { ...state, draft: action.payload.newDraft };
    case ACTION.ADD:
      return {
        draft: '',
        todos: [{ id: state.todos.length, text: state.draft }, ...state.todos],
      };
    default:
      return state;
  }
};

const RTodo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className='todo'>
      <input
        type='text'
        id='todo'
        value={state.draft}
        onChange={e =>
          dispatch({
            type: ACTION.CHANGE,
            payload: { newDraft: e.target.value },
          })
        }
      />
      <button onClick={() => dispatch({ type: ACTION.ADD })}>ADD TODO</button>

      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default RTodo;
