export class Todo {
  id: number;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = Math.random();
  }
}

// class는 생성자 & 타입 역할을 같이 할 수 있음
