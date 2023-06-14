import { useState, useEffect } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  // useEffect(효과함수)의 부수효과: 수행 동작이 jsx 코드에 직접적인 영향을 주지 않는 경우나 UI 렌더링과 관련없는 다른 작업을 하는 경우에 사용
  // 예를 들어 Api fetch 작업 - useEffect를 사용하지 않으면 무한루프에 빠짐
  // 의존성 배열: 함수가 실행되는 시점을 결정하는 데이터
  useEffect(() => {
    (async () => {
      // 로딩 true
      setIsFetching(true);
      const data = await (await fetch('http://localhost:8080/posts')).json();
      setPosts(data.posts);
      // 로딩 false
      setIsFetching(false);
    })();
  }, []);

  const addPostHandler = postData => {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'content-type': 'application/json',
      },
    });
    setPosts(existingPosts => [postData, ...existingPosts]);
  };

  return (
    <>
      {/* 포스팅 중이면 모달의 바깥 영역이나 닫기 버튼을 클릭할 때 모달 닫기, 확인 버튼 누르면 새 글 등록하도록 함수를 props로 내려주고 있음 */}
      {/* 4: 포스팅 중, 데이터 받아오는 중, 데이터 받아온 뒤 포스트가 있을 때, 없을 때 */}
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {isFetching && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <p>Loading posts...</p>
        </div>
      )}
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map(post => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
