class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = Math.random().toString();
  }
}

export default Todo;
// class는 생성자 & 타입 역할을 같이 할 수 있음
