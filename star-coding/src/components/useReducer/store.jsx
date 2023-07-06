const ACTION_TYPE = {
  ADD: 'ADD',
  DEL: 'DEL',
  STRIKE: 'STRIKE',
};

const initialState = {
  count: 0,
  students: [],
};

const studentsReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD:
      const newStudent = {
        id: Date.now(),
        name: action.payload,
        isHere: false,
      };
      return {
        count: ++state.count,
        students: [newStudent, ...state.students],
      };
    case ACTION_TYPE.DEL:
      return {
        count: --state.count,
        students: state.students.filter(
          student => student.id !== action.payload.id
        ),
      };
    case ACTION_TYPE.STRIKE:
      return {
        count: state.count,
        students: state.students.map(student => {
          if (student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      };
    default:
      return state;
  }
};

const store = { ACTION_TYPE, initialState, studentsReducer };
export default store;
