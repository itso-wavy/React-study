import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import 'tailwindcss/tailwind.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Detail />} path='/movie/:id' />
      </Routes>
    </Router>
  );
};

export default App;
