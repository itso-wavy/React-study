import styled from 'styled-components';
import PostListItem from './PostListItem';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

const PostList = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    axios('http://localhost:3000/posts').then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <Wrapper>
      <h2 className='sr-only'>postlist</h2>
      {data &&
        data.map(post => {
          return <PostListItem key={post.id} {...post} />;
        })}
    </Wrapper>
  );
};

export default PostList;
