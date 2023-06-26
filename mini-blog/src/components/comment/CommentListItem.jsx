import styled from 'styled-components';

const Wrapper = styled.article`
  width: 100%;
  padding: 1em 1.5em;
  position: relative;
  font-size: 0.9em;
  background-color: var(--color-secondary);
  border-radius: 30px;

  &:hover {
    opacity: 0.75;
  }
`;

const CommentListItem = ({ author, content }) => {
  return (
    <>
      <Wrapper>
        <p>{author}</p>
        <p className='text-body'>{content}</p>
      </Wrapper>
    </>
  );
};

export default CommentListItem;
