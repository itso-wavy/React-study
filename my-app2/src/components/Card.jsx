import EditButton from './EditButton.jsx';

const Card = ({ children }) => {
  const style = {
    backgroundColor: 'beige',
    padding: '5em',
    width: '5em',
  };

  return (
    <div style={style}>
      <p>{children}</p>
      <EditButton />
    </div>
  );
};

export default Card;
