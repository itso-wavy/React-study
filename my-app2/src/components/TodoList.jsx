import { useState } from 'react';

function TodoList() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = e => {
    setToDo(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (toDo) {
      setToDos(toDos => [toDo, ...toDos]);
      setToDo('');
    }
    return;
  };
  return (
    <div>
      <h1>My Todos: {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} type='text' onChange={onChange} placeholder='' />
        <button>Add To Do</button>
      </form>
      <ul>
        {toDos.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
export default TodoList;
