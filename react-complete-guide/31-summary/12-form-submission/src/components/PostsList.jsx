import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({ isPosting, onStopPosting }) {
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          {/* 모달 컴포넌트는 전체 배경, 실제 모달은 newPost인 구조 */}
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author='Manuel' body='Check out the full course!' />
      </ul>
    </>
  );
}

export default PostsList;
