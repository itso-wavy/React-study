import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CommentListItem from './CommentListItem';
import TextInput from '../common/TextInput';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 1.5em;
  border-top: 1px solid var(--color-secondary);
`;

const CommentList = ({ comments = [] }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/');
  };

  return (
    <Wrapper>
      <h2 className='sr-only'>comment list</h2>
      {comments.map((comment, index) => {
        return <CommentListItem key={index} {...comment} />;
      })}
      <TextInput
        type='comment'
        title='댓글'
        titleAlign='start'
        heigth='100px'
        onClick={onClick}
      />
    </Wrapper>
  );
};

export default CommentList;
