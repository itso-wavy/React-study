import classes from './Modal.module.css';
import { createPortal } from 'react-dom';

const Overlays = ({ children }) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div>{children}</div>
      </div>
    </div>
  );
};

const Modal = ({ children }) => {
  return (
    <>
      {createPortal(
        <Overlays>{children}</Overlays>,
        document.getElementById('overlays')
      )}
    </>
  );
};

export default Modal;
