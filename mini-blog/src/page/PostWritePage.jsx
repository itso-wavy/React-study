import Header from '../component/header/Header';
import TextInput from '../component/common/TextInput.jsx';
import { useNavigate } from 'react-router-dom';

const PostPage = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/');
  };

  return (
    <>
      <Header />
      <main>
        <TextInput
          title='글 쓰기'
          titleAlign='center'
          heigth='300px'
          onClick={onClick}
        />
      </main>
    </>
  );
};

export default PostPage;
