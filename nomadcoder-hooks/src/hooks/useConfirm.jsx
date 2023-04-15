const useConfirm = (message = '', onConfirm, onCancle) => {
  if (typeof onConfirm !== 'function') return;
  if (onCancle && typeof onCancle !== 'function') return;
  const confirmAction = () => {
    if (window.confirm(message)) onConfirm();
    else
      try {
        onCancle();
      } catch {
        return;
      }
  };

  return confirmAction;
};

export default useConfirm;
