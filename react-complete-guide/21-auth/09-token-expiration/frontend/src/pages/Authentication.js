import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({ request }) => {
  // AuthForm 전송시 트리거 됨, form 입력 데이터를 가져와서, 모드(로그인/회원가입)에 맞게 가공하고 백엔드로 보낼 목적

  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  // 쿼리스트링은 필수가 아니므로 예외처리 필요!
  if (mode !== 'login' && mode !== 'signup') {
    throw json({ message: 'unsupported mode!' }, { status: 422 });
  }

  const data = await request.formData();

  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: 'POST',
    body: JSON.stringify(authData),
    headers: { 'content-type': 'application/json' },
  });

  if (response.status === 422 || response.status === 401) {
    // 422: 요청 오류, 401: 인증 오류(미승인), 403: 금지됨
    return response;
  }
  if (!response.ok) {
    throw json({ message: 'Could not authenticate user.' }, { status: 500 });
  }

  const resData = await response.json();
  const token = resData.token;

  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);

  localStorage.setItem('token', token);
  localStorage.setItem('expiration', expiration.toISOString());

  return redirect('/');
};
