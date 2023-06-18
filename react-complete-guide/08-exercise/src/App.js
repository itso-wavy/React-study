import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import Users from './components/pages/Users.jsx';
import Admin from './components/pages/Admin.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
