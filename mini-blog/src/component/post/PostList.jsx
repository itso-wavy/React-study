import styled from 'styled-components';
import PostListItem from './PostListItem';

const Wrapper = styled.div`
  /* align-items: center;
justify-content: flex-start; */

  /* display: flex;
flex-direction: column;

justify-content: center;
align-items: flex-start; 

& > * {
  :not(:last-child) {
    margin-bottom: 16px;
  }
*/
}
`;

const PostList = ({ posts, onClickItem }) => {
  return (
    <Wrapper>
      {posts.map(item => {
        return (
          <PostListItem
            key={item.id}
            post={item}
            onClick={() => {
              onClickItem(item);
            }}
          />
        );
      })}
    </Wrapper>
  );
};

export default PostList;
