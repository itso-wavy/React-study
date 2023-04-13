import { useContext } from 'react';
import { AdminFlagContext } from './providers/AdminFlagProvider.jsx';
import Card from './Card.jsx';

const ContextTester = () => {
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);
  const onClickSwitch = () => {
    setIsAdmin(!isAdmin);
  };
  const name = 'wavy';

  return (
    <>
      <h1>useContext</h1>
      <span>{isAdmin ? '관리자입니다' : '관리자가 아닙니다'}</span>
      <button onClick={onClickSwitch}>전환</button>
      <Card isAdmin={isAdmin}>{name}</Card>
    </>
  );
};

export default ContextTester;
