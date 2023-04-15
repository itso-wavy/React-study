import useConfirm from './hooks/useConfirm';

const App = () => {
  const message = 'Are you sure?';
  const onConfirm = () => {
    console.log('확인하셨습니다.');
  };
  const onCancle = () => {
    console.log('취소하셨습니다.');
  };
  const confirm = useConfirm(message, onConfirm, onCancle);

  return (
    <>
      <button onClick={confirm}>Display confirmation window</button>
    </>
  );
};

export default App;
