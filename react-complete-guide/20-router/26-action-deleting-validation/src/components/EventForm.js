import { Form, useNavigate } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }
  /* 
    - 양방향 바인딩이나 ref를 사용하여 데이터 추출
    - 수동으로 http 요청을 전송하거나 로딩, 오류 상태를 관리
    - useNavigate 등을 통해 페이지를 떠남
    
    => 로더의 action+Form을 사용하여 이 방법들을 대체
        Form 전송시 백엔드가 아닌 action으로 요청됨
  */

  // action='/any-other-path'
  return (
    <Form method={method} className={classes.form}>
      <p>
        <label htmlFor='title'>Title</label>
        <input id='title' type='text' name='title' required />
      </p>
      <p>
        <label htmlFor='image'>Image</label>
        <input id='image' type='url' name='image' required />
      </p>
      <p>
        <label htmlFor='date'>Date</label>
        <input id='date' type='date' name='date' required />
      </p>
      <p>
        <label htmlFor='description'>Description</label>
        <textarea id='description' name='description' rows='5' required />
      </p>
      <div className={classes.actions}>
        <button type='button' onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default EventForm;
