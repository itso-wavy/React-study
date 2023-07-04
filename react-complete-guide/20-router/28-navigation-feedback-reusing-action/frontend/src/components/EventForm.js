import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import { json, redirect } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method = 'post', event }) {
  const navigate = useNavigate();
  const { state } = useNavigation();
  const data = useActionData();

  const isSubmiiting = state === 'submitting';

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data?.errors).map(msg => (
            <li key={msg}>{msg}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor='title'>Title</label>
        <input id='title' type='text' name='title' />
      </p>
      <p>
        <label htmlFor='image'>Image</label>
        <input id='image' name='image' />
      </p>
      <p>
        <label htmlFor='date'>Date</label>
        <input id='date' type='date' name='date' />
      </p>
      <p>
        <label htmlFor='description'>Description</label>
        <textarea id='description' name='description' rows='5' />
      </p>
      <div className={classes.actions}>
        <button type='button' onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmiiting}>
          {isSubmiiting ? 'Submitting...' : 'Save'}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;

/* 
  - 양방향 바인딩이나 ref를 사용하여 데이터 추출
  - 수동으로 http 요청을 전송하거나 로딩, 오류 상태를 관리
  - useNavigate 등을 통해 페이지를 떠남
  
  => 로더의 action+Form을 사용하여 이 방법들을 대체
      Form 전송시 백엔드가 아닌 action으로 요청됨
*/
export const action = async ({ request, params }) => {
  // newEvent 폼 제출시 실행하는 함수, formData를 가공하여 백엔드로 전송함
  const method = request.method;
  const formData = await request.formData();
  let url = 'http://localhost:8080/events/';

  const eventData = {
    title: formData.get('title'), // input name으로 get
    image: formData.get('image'),
    date: formData.get('date'),
    description: formData.get('description'),
  };

  if (method === 'patch') {
    const eventId = params.eventId;
    console.log('eventId: ', eventId);
    url = url + eventId;
  }

  const response = await fetch(url, {
    method,
    body: JSON.stringify(eventData),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.status === 422) return response;

  if (!response.ok)
    throw json({ message: 'could not save event!' }, { status: 500 });

  // return redirect('..');
  return redirect('/events');
};
