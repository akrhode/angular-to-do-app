import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos = [
    { todo: 'Buy groceries', done: false },
    { todo: 'Water plants', done: false },
    { todo: 'Clean the flat', done: true },
  ];

  newTodo = '';

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push({ todo: this.newTodo, done: false });
    }
  }

  countTodos() {
    const done = this.todos.filter((item) => {
      return !item.done;
    });
    return done;
  }

  setTodo(event: KeyboardEvent) {
    this.newTodo = (event.target as HTMLInputElement).value;
    console.log(this.newTodo);
  }

  toggleTodo(index: number) {
    this.todos[index].done = !this.todos[index].done;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  title = 'angular-to-do-app';
}
