import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp, { URL } from '../../hooks/use-http';

const NewTask = props => {
  const { isLoading, error, sendRequest } = useHttp();

  const applyData = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = taskText => {
    sendRequest(
      {
        URL,
        fetchOpt: {
          method: 'POST',
          body: JSON.stringify({ text: taskText }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      },
      applyData.bind(null, taskText)
      // const applyData = (taskText, data) =>{} 🙆‍♀️
      // const applyData = (data, taskText) =>{} 🙅‍♀️
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
