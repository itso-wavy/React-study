import { useRef } from 'react';

const useFullscreen = onFullScreen => {
  const ref = useRef();
  const runCb = isFull => {
    if (typeof onFullScreen === 'function') onFullScreen(isFull);
  };
  const makeFull = () => {
    runCb(true);
    ref.current && ref.current.requestFullscreen();
  };
  const exitFull = () => {
    runCb(false);
    document.exitFullscreen();
  };

  return { ref, makeFull, exitFull };
};

export default useFullscreen;
