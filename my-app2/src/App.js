import { useContext } from 'react';
import { AdminFlagContext } from './components/providers/AdminFlagProvider.jsx';
import Card from './components/Card.jsx';

function App() {
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);
  const onClickSwitch = () => {
    setIsAdmin(!isAdmin);
  };
  const name = 'wavy';

  return (
    <div>
      <span>{isAdmin ? '관리자입니다' : '관리자가 아닙니다'}</span>
      <button onClick={onClickSwitch}>전환</button>
      <Card isAdmin={isAdmin}>{name}</Card>
    </div>
  );
}
export default App;
