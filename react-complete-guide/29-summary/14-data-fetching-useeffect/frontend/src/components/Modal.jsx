import classes from './Modal.module.css';

// UI 컴포넌트
function Modal({ children, onClose }) {
  // children을 받는 게 특징
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
