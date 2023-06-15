import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './MainHeader.module.css';
import { Link } from 'react-router-dom';

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to='/create-post' className={classes.button}>
          {/* a 태그를 사용하면 페이지 전체 리렌더링이 일어나므로 link 컴포넌트를 사용, a를 렌더링하면서도 자체적으로 요청 전송을 막고 라우트 효과만 노림 */}
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}
0;
export default MainHeader;
