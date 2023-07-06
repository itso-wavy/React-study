import { useImmerReducer } from 'use-immer';

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
    case ACTION.CHANGE: {
      state.draft = action.payload.newDraft;
      return;
    }
    case ACTION.ADD: {
      state.todos.push({
        id: state.todos.length,
        text: state.draft,
      });
      state.draft = '';
      return;
    }
    default:
      return state;
  }
};

const changeDraft = newDraft => ({
  type: ACTION.CHANGE,
  payload: { newDraft },
});

const addToDo = () => ({
  type: ACTION.ADD,
});

const ITodo = () => {
  const [state, dispatch] = useImmerReducer(todoReducer, initialState);

  return (
    <div className='todo'>
      <input
        type='text'
        id='todo'
        value={state.draft}
        onChange={e => dispatch(changeDraft(e.target.value))}
      />
      <button onClick={() => dispatch(addToDo())}>ADD TODO</button>

      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ITodo;
