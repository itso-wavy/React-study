import { Outlet } from 'react-router-dom';
import PostsList from '../components/PostsList';

function Posts({ modalIsVisible }) {
  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      {/* 모달은 Posts 위에 오버레이됨, 모달 자리에 Outlet 위치 */}
      <Outlet />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default Posts;
