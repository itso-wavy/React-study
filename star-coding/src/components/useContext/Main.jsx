import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { UserContext } from '../../context/UserContext';

const Main = () => {
  const { isDark } = useContext(ThemeContext);
  const { username, setUsername } = useContext(UserContext);

  const usernameHandler = e => setUsername(e.target.value.toUpperCase());
  return (
    <main
      className='content'
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
      }}
    >
      <input onChange={usernameHandler} value={username} />
      <br />
      {username}님, 좋은 하루 되세요
    </main>
  );
};

export default Main;
