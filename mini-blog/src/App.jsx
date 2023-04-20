import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GloabalStyle from './styles/globalStyle';
import HomePage from './page/HomePage';
import PostWritePage from './page/PostWritePage';
import PostDetailPage from './page/PostDetailPage';

const App = () => {
  return (
    <>
      <GloabalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/post/Detail/:id' element={<PostDetailPage />} />
          <Route path='/post/write' element={<PostWritePage />} />
          <Route path='/post/edit/:id' element={<PostWritePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
