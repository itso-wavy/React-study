import UseContext from './UseContext';
import UseEffect from './UseEffect';
import UseRef from './UseRef';
import UseState from './UseState';
import UseReducer from './UseReducer';

function App() {
  return (
    <div>
      {/* lazy initialization */}
      <UseState />
      {/* lifecycle & clean up */}
      <UseEffect />
      {/* state 대체 & DOM 조작 */}
      <UseRef />
      {/* user, theme, language-props 대체 */}
      <UseContext />
      {/* 많고 다단한 state 관리-state 대체 */}
      <UseReducer />
    </div>
  );
}

export default App;
