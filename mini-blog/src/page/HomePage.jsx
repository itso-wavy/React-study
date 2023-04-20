import Header from '../component/header/Header';
import Button from '../component/common/Button';
import PostList from '../component/post/PostList';
import Footer from '../component/footer/Footer';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainPage = () => {
  const navigate = useNavigate();
  const writePost = () => {
    navigate('./post/write');
  };

  const Wrapper = styled.div`
    text-align: center;
    margin: 1em auto;
  `;

  return (
    <>
      <Header type='home' />
      <main>
        <Wrapper>
          <Button text='글쓰기' onClick={writePost} />
        </Wrapper>
        <PostList />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
