import { makeAutoObservable } from "mobx";

class todo {
  todo = [
    { id: -1, title: "frontend", completed: false },
    { id: -2, title: "backtend", completed: false },
    { id: -3, title: "full-stack", completed: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: { id: number; title: string; completed: boolean }) {
    this.todo.push(todo);
  }

  removeTodo(id: number) {
    this.todo = this.todo.filter((todo) => todo.id !== id);
  }

  addToCompleted(todo: { id: number; title: string; completed: boolean }) {
    todo.completed = !todo.completed;
  }

  fetch() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => this.todo = [...this.todo, ...json]);
  }
}

export default new todo();
