import styled from 'styled-components';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import CommentList from '../component/comment/CommentList';
import dummydata from '../assets/dummydata.json';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const id = useParams().id;
  const data = dummydata.filter(item => item['id'] === Number(id));
  const [{ tag, title, content, date, author, comments }] = data;

  const Wrapper = styled.section`
    width: 100%;
    padding: 1.5em;
    position: relative;
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

  return (
    <>
      <Header />
      <main>
        <Wrapper>
          <div>
            <h3 className='title'>{title}</h3>
            {tag.map((item, index) => {
              return (
                <SSpan key={index} className='tag'>
                  {item}
                </SSpan>
              );
            })}
          </div>
          <div>
            <SSpan>{author}</SSpan>
            <SSpan className='end'>written on {date}</SSpan>
          </div>
          <p className='text-body'>{content}</p>
        </Wrapper>
        <CommentList comments={comments} />
      </main>
      <Footer />
    </>
  );
};

export default PostPage;
