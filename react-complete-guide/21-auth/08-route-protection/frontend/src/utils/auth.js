import { redirect } from 'react-router-dom';

export const getAuthToken = () => {
  const token = localStorage.getItem('token');

  return token;
};

export const tokenLoader = () => {
  return getAuthToken();
};

export const checkAuthLoader = () => {
  const token = getAuthToken();

  if (!token) {
    // 방법 1
    return redirect('/auth');
    // 방법 2: 에러 페이지로 이동
  }
};
