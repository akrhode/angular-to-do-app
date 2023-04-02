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

  toggleTodo(index: number) {
    this.todos[index].done = !this.todos[index].done;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  title = 'angular-to-do-app';
}
