import classes from './Modal.module.css';
import { createPortal } from 'react-dom';

const Backdrop = ({ onClick }) => {
  return <div className={classes.backdrop} onClick={onClick}></div>;
};
const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div>{children}</div>
    </div>
  );
};

const Modal = ({ children, onClick }) => {
  return (
    <>
      {createPortal(
        <Backdrop onClick={onClick} />,
        document.getElementById('overlays')
      )}
      {createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById('overlays')
      )}
    </>
  );
};

export default Modal;
