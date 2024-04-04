import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsList.module.css';
import { useState } from 'react';

function PostsList() {
  const [post, setPost] = useState({
    textarea: 'text',
    input: '',
  });
  const onTextareaChange = () => {
    console.log(123);
  };

  const onInputChange = () => {
    console.log(456);
  };

  return (
    <>
      <NewPost
        onTextareaChange={onTextareaChange}
        onInputChange={onInputChange}
        post={post}
      />
      <ul className={classes.posts}>
        <Post author='Maximilian' body='React.js is awesome!' />
        <Post author='Manuel' body='Check out the full course!' />
      </ul>
    </>
  );
}

export default PostsList;
