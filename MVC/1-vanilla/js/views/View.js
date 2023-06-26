import { emit, on } from '../helpers.js';

const tag = '[View]';

export default class View {
  // DOM 요소를 클래스의 내부 변수로 저장,
  // $ele의 display 여부를 설정
  // $ele의 이벤트 바인딩 관리

  constructor(element) {
    console.log(tag, 'constructor');

    if (!element) throw 'no element';

    this.element = element;
    this.originalDisplay = this.element.style.display || '';

    return this;
  }

  hide() {
    this.element.style.display = 'none';
    return this;
  }

  show() {
    this.element.style.display = this.originalDisplay;
    return this;
  }

  on(eventName, handler) {
    on(this.element, eventName, handler);
    return this;
  }

  emit(eventName, data) {
    emit(this.element, eventName, data);
    return this;
  }
}
