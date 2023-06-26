import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GloabalStyle from './lib/styles/GlobalStyle.jsx';
import HomePage from './pages/HomePage';
import PostDetailPage from './pages/PostDetailPage';
import PostWritePage from './pages/PostWritePage';

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
