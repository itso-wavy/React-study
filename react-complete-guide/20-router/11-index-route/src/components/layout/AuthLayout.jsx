import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function AuthLayout() {
  const navigate = useNavigate();

  const onSubmitHandler = e => {
    e.preventDefault();
    navigate('/products');
    // 폼 제출, 타이머 만료 등 이벤트 발생시 사용
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <h2>입력해주세요</h2>
        <Outlet />
        <button>제출</button>
      </form>
      <Link to='/'>홈으로 가기</Link>
    </>
  );
}
