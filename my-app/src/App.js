import './styles/css/style.css';

import { Props, Props2 } from './components/MyComponent_props.js';
import { State, State2 } from './components/MyComponent_state.js';
import { EventHandling, EventHandling2 } from './components/EventHandling.js';
import { RefFocus, RefScroll } from './components/Ref.js';
// import { SassComponent } from './components/SassComponent.js';
import Emotion from './components/EmotionComponent.js';
import TailwindCSS from './components/TailwindComponent.js';

const App = () => {
  return (
    <>
      <Props name='클래스형'>뒤로 가기</Props>
      <Props2 name='함수형'>앞으로 가기</Props2>
      <State text='State' />
      <State2 />
      <EventHandling />
      <EventHandling2 />
      <RefFocus />
      <RefScroll />
      {/* <Ref_scroll ref={ref => this.box.ref} /> // 클래스형 문법
      <button onClick={() => this.box.scrollToBottom()}>아래로</button> */}
      {/* <SassComponent /> */}
      <Emotion />
      <TailwindCSS />
    </>
  );
};

export default App;
