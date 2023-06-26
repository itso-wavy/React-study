import { useNavigate } from 'react-router-dom';
import Header from '../components/@layout/header/Header';
import Button from '../components/@UI/Button';
import Footer from '../components/@layout/footer/Footer';
import PostList from '../components/post/PostList';
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
