import { Props, Props2 } from './MyComponent_props.js';
import { State, State2 } from './MyComponent_state.js';
import { EventHandling, EventHandling2 } from './EventHandling.js';
import { RefFocus, RefScroll } from './Ref.js';
// import { SassComponent } from './SassComponent.js';
import Emotion from './EmotionComponent.js';
import Tailwind from './TailwindComponent.js';

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
      <Tailwind />
    </>
  );
};

export default App;
