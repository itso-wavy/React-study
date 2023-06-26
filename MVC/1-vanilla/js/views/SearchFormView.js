import { on, qs } from '../helpers.js';
import View from './View.js';

const tag = '[SearchFormView]';

export default class SearchFormView extends View {
  constructor() {
    console.log(tag, 'constructor');

    super(qs('#search-form-view'));

    this.inputElement = qs('[type=text]', this.element);
    this.resetElement = qs('[type=reset]', this.element);

    this.showResetButton(false); // 초기 설정: x 버튼이 보이지 않음
    this.bindEvents(); // 검색어 입력 이벤트 발생시 x 버튼이 보임
  }

  showResetButton(visible = true) {
    this.resetElement.style.display = visible ? 'block' : 'none';
  }

  bindEvents() {
    on(this.inputElement, 'keyup', () => this.handleKeyup());
    this.on('submit', event => this.handleSubmit(event));
    this.on('reset', () => this.handleReset());
  }

  handleKeyup() {
    const { value } = this.inputElement;
    this.showResetButton(value.length > 0);

    if (value.length <= 0) {
      this.handleReset();
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const { value } = this.inputElement;
    this.emit('@submit', { value }); // 이벤트 발행 => 컨트롤러가 수신
  }

  handleReset() {
    this.emit('@reset'); // 이벤트 발행(emit) => 컨트롤러가 수신(on)
  }

  show(value = '') {
    this.inputElement.value = value;
    this.showResetButton(this.inputElement.value.length > 0);

    super.show();
  }
}
