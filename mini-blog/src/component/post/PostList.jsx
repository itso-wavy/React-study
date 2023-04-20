import styled from 'styled-components';
import PostListItem from './PostListItem';
import dummydata from '../../assets/dummydata.json';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

const PostList = () => {
  return (
    <Wrapper>
      <h2 className='sr-only'>postlist</h2>
      {dummydata.map(post => {
        return <PostListItem key={post.id} {...post} />;
      })}
    </Wrapper>
  );
};

export default PostList;
