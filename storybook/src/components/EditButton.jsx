import { useContext } from 'react';
import { AdminFlagContext } from './providers/AdminFlagProvider';

const EditButton = () => {
  const { isAdmin } = useContext(AdminFlagContext);

  return <button disabled={!isAdmin}>수정</button>;
};

export default EditButton;
