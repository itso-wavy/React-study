// 뷰(V)
import { emit, on } from '../helpers.js';

class View {
  constructor($ele) {
    this.$ele = $ele;
    this.originalDisplay = this.$ele.style.display || '';
  }

  hide() {
    this.$ele.style.display = 'none';
  }

  show() {
    this.$ele.style.display = this.originalDisplay;
  }

  on(eventName, handler) {
    // 이벤트 리스너
    on(this.$ele, eventName, handler);
  }

  emit(eventName, params) {
    // 디스패치 이벤트
    emit(this.$ele, eventName, params);
  }
}
