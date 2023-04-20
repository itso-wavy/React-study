import styled from 'styled-components';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import Button from '../component/common/Button';
import CommentList from '../component/comment/CommentList';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
const RestyledButton = styled(Button)`
  margin-left: 1em;
  background-color: blue;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  margin-top: 0.8em;
`;

const PostPage = () => {
  const URL_ID = useParams().id;
  const [data, setData] = useState({
    tag: [],
    title: '',
    content: '',
    date: '',
    author: '',
    comments: [],
  });

  useEffect(() => {
    axios('http://localhost:3000/posts').then(res => {
      setData(...res.data.filter(item => item['id'] === Number(URL_ID)));
    });
  }, []);
  const { tag, title, content, date, author, comments } = data;

  const navigate = useNavigate();
  const editPost = () => {
    navigate(`/post/edit/${URL_ID}`);
  };
  const deletePost = () => {
    axios({
      url: `http://localhost:3000/posts/${URL_ID}`,
      method: 'DELETE',
    }).then(() => {
      navigate('/');
      window.location.reload();
    });
  };

  return (
    <>
      <Header />
      <main>
        <Wrapper>
          <div>
            <h3 className='title'>{title}</h3>
            {tag &&
              tag.map((item, index) => {
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
          <Box>
            <RestyledButton text='수정' onClick={editPost} />
            <RestyledButton text='삭제' onClick={deletePost} />
          </Box>
        </Wrapper>
        <CommentList comments={comments} />
      </main>
      <Footer />
    </>
  );
};

export default PostPage;
