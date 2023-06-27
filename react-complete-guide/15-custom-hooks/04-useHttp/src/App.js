import React, { useCallback, useEffect, useMemo, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp, { URL } from './hooks/use-http';

/* 무한 렌더링 이슈:
useEffect 안의 sendRequest 호출 
=> useHttp 안의 state들이 재설정됨
=> 커스텀훅을 사용하는 App 컴포넌트가 재렌더링됨
=> useHttp 호출
=> sendRequest 호출
=> 무한 반복... 

- 해결책: memoization */

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  // 메모이제이션을 위해 sendRequest의 callback 의존성 설정
  const applyData = useCallback(data => {
    const loadedTasks = [];
    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }
    setTasks(loadedTasks);
  }, []);

  // 메모이제이션을 위해 sendRequest의 callback 의존성 설정
  const requestConfig = useMemo(
    () => ({
      URL,
    }),
    []
  );

  const { isLoading, error, sendRequest } = useHttp(requestConfig, applyData);

  useEffect(() => {
    console.log('render!');
    sendRequest();
  }, [sendRequest]);

  const taskAddHandler = task => {
    setTasks(prevTasks => prevTasks.concat(task));
  };

  // const fetchTasks = async taskText => {
  // setIsLoading(true);
  // setError(null);
  //   try {
  //     const response = await fetch(
  //       'https://react-http-6b4a6.firebaseio.com/tasks.json'
  //     );

  //     if (!response.ok) {
  //       throw new Error('Request failed!');
  //     }

  //     const data = await response.json();

  //     const loadedTasks = [];

  //     for (const taskKey in data) {
  //       loadedTasks.push({ id: taskKey, text: data[taskKey].text });
  //     }

  //     setTasks(loadedTasks);
  //   } catch (err) {
  //     setError(err.message || 'Something went wrong!');
  //   }
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   fetchTasks();
  // }, []);

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={sendRequest}
      />
    </React.Fragment>
  );
}

export default App;
