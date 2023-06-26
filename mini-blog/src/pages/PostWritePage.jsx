import Header from '../components/@layout/header/Header';
import TextInput from '../components/@UI/TextInput.jsx';

const PostPage = () => {
  return (
    <>
      <Header />
      <main>
        <TextInput
          type='post'
          title='글 쓰기'
          titleAlign='center'
          heigth='300px'
        />
      </main>
    </>
  );
};

export default PostPage;
