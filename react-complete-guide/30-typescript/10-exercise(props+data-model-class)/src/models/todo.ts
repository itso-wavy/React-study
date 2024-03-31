export class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

// class는 생성자 & 타입 역할을 같이 할 수 있음
