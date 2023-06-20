import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

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

const portalEle = document.getElementById('overlays');

const Modal = ({ children, onClick }) => {
  return (
    <>
      {createPortal(<Backdrop onClick={onClick} />, portalEle)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalEle)}
    </>
  );
};

export default Modal;
