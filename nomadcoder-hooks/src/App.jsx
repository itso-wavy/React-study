import useFullscreen from './hooks/useFullscreen';

const App = () => {
  const onFullScreen = isFull =>
    console.log(isFull ? 'fullscreen' : 'not fullscreen');
  const { ref, makeFull, exitFull } = useFullscreen(onFullScreen);

  return (
    <>
      <div ref={ref}>
        <img
          src='https://www.ikea.com/kr/ko/images/products/blavingad-soft-toy-octopus-yellow__1088894_pe861308_s5.jpg?f=s'
          alt=''
        />
        <button onClick={makeFull}>Make Fullscreen</button>
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
    </>
  );
};

export default App;
