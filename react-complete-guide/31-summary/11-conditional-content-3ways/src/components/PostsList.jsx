import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList() {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function closeModal() {
    setIsModalVisible(isModalVisible => !isModalVisible);
  }

  let modalContent;
  if (isModalVisible) {
    modalContent = (
      <Modal>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
          onClick={closeModal}
        />
      </Modal>
    );
  }

  return (
    <>
      {/* 조건부 랜더링 1 */}
      {modalContent}
      {/* 조건부 랜더링 2 */}
      {isModalVisible ? (
        <Modal>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
            onClick={closeModal}
          />
        </Modal>
      ) : null}
      {/* 조건부 랜더링 3 */}
      {isModalVisible && (
        <Modal>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
            onClick={closeModal}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author='Manuel' body='Check out the full course!' />
      </ul>
    </>
  );
}

export default PostsList;
