import { Component } from '@angular/core';
import { MultilangService } from '../services/multilang.service';

interface TodoItem {
  name: string;
  editable: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  constructor(
    public multilangService: MultilangService,
    private multiLang: MultilangService
  ) {}

  newTodo = '';
  todos: TodoItem[] = [];

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push({ name: this.newTodo, editable: false });
      this.newTodo = '';
    }
  }

  deleteTodoConfirm(todo: TodoItem) {
    const confirmDelete = confirm(
      this.multiLang.getTranslation('addToduAskDel')
    );
    if (confirmDelete) {
      this.deleteTodoByItem(todo);
    }
  }

  deleteTodoByItem(todo: TodoItem) {
    const index = this.todos.indexOf(todo);
    if (index >= 0) {
      this.todos.splice(index, 1);
    }
  }

  editTodoName(todo: TodoItem, newName: string) {
    todo.name = newName;
  }

  editTodoEditable(todo: TodoItem, editable: boolean) {
    todo.editable = editable;
  }

  editTodoEvent(event: Event, index: number) {
    const newName = (event.target as HTMLInputElement).textContent ?? '';
    const todo = this.todos[index];
    this.editTodoName(todo, newName);
    this.editTodoEditable(todo, false);
  }

  editTodoInput(event: Event, index: number) {
    const todo = this.todos[index];
    this.editTodoEditable(todo, true);
  }

  saveTodoEvent(event: Event, index: number) {
    const newName =
      (event.target as HTMLButtonElement).parentElement
        ?.querySelector('span')
        ?.textContent?.trim() ?? '';
    const todo = this.todos[index];
    if (newName !== '') {
      todo.name = newName;
    }
    this.editTodoEditable(todo, false);
  }
}
