import { useState, useEffect } from 'react';
import PostListItem from './PostListItem';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

const PostList = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    axios('http://localhost:3001/posts').then(res => {
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
