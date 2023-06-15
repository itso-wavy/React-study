import MainHeader from '../components/MainHeader';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
      {/* 중첩 라우트가 가진 실제 컨텐츠가 삽입될 위치에 Outlet 컴포넌트를 추가 */}
    </>
  );
}

export default RootLayout;
