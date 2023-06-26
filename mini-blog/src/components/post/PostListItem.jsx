import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.article`
  width: 100%;
  padding: 1.5em;
  position: relative;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-secondary);
  }
`;
const SSpan = styled.span`
  font-size: var(--font-size-small);
  line-height: inherit;
  color: var(--color-primary);

  &.tag {
    padding: 9px 16px;
    border-radius: 200px;
    background-color: var(--color-primary);
    color: var(--color-white);
    &:not(:last-child) {
      margin-right: 1em;
    }
  }

  &.end {
    position: absolute;
    right: 1.5em;
  }
`;

const PostListItem = ({ id, tag, title, content, date, author }) => {
  return (
    <>
      <Wrapper>
        <Link to={`/post/detail/${id}`}>
          <div>
            {tag.map((item, index) => {
              return (
                <SSpan key={index} className='tag'>
                  {item}
                </SSpan>
              );
            })}
          </div>
          <h3 className='title'>{title}</h3>
          <div>
            <SSpan>{author}</SSpan>
            <SSpan className='end'>written on {date}</SSpan>
          </div>
          <p className='text-body'>{content}</p>
        </Link>
      </Wrapper>
    </>
  );
};

export default PostListItem;
