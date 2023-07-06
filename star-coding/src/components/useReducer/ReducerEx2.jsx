import { useReducer, useState } from 'react';
import Student from './Student.jsx';
import store from './store.jsx';

// 🎁 예제 2
const ReducerEx2 = () => {
  const { ACTION_TYPE, initialState, studentsReducer } = store;

  const [name, setName] = useState('');
  const [studentsInfo, dispatch] = useReducer(studentsReducer, initialState);

  return (
    <>
      <strong>- 비교적 복잡한 예제</strong>
      <p>총 학생 수: {studentsInfo.count}</p>
      <input
        type='text'
        placeholder='이름을 입력해주세요'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button
        onClick={() => dispatch({ type: ACTION_TYPE.ADD, payload: name })}
      >
        추가
      </button>
      {studentsInfo.students.map(student => {
        return (
          <Student
            key={student.id}
            id={student.id}
            isHere={student.isHere}
            name={student.name}
            dispatch={dispatch}
          />
        );
      })}
    </>
  );
};

export default ReducerEx2;
