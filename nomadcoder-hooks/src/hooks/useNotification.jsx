const useNotification = (title, options) => {
  if (!('Notification' in window)) return;
  const triggerNoti = () => {
    if (Notification.permission === 'granted') {
      new Notification(title, options);
    } else {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') new Notification(title, options);
        else return;
      });
    }
  };
  return triggerNoti;
};

export default useNotification;
