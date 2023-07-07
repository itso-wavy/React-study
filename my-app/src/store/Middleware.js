const loggerMiddleware = store => next => action => {
  // middleware 기본 구조
  console.group(action && action.type);
  console.log('prevState:', store.getState());
  console.log('action:', aciton);
  next(action); // 다음 미들웨어 혹은 리듀서에게 전달
  console.log('nextState:', store.getState());
  console.groupEnd();
};
export default loggerMiddleware;
