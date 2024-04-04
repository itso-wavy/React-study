import { Link, Form, redirect } from 'react-router-dom';

import classes from './NewPost.module.css';
import Modal from '../components/Modal';

function NewPost() {
  return (
    <Modal>
      <Form method='post' className={classes.form}>
        {/* Form 컴포넌트 이용, 전송시 라우터의 action 함수 실행, form 데이터가 action으로 전송됨*/}
        <p>
          <label htmlFor='body'>Text</label>
          <textarea id='body' name='body' required rows={3} />
        </p>
        <p>
          <label htmlFor='name'>Your name</label>
          <input type='text' name='author' id='name' required />
        </p>
        <p className={classes.actions}>
          <Link to='..' type='button'>
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export const action = async ({ request }) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'content-type': 'application/json',
    },
  });

  return redirect('/');
  // redirect() 호출값이 반환되면 라우터는 액션 수행 뒤 다른 라우트('/')를 로드함, 이 경우엔 element: <Posts />
  // 결론적으로 폼의 데이터 전송을 한 뒤 '/' 라우터로 자동 이동함
};

export default NewPost;
