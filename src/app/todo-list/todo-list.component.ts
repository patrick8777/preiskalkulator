import { Component } from '@angular/core';

interface Item {
  text: string;
  editing: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  items: Item[] = [
    {text: 'Item 1', editing: false},
    {text: 'Item 2', editing: false},
    {text: 'Item 3', editing: false},
  ];
  newItemText = '';

  addItem() {
    if (this.newItemText.trim() !== '') {
      this.items.push({text: this.newItemText, editing: false});
      this.newItemText = '';
    }
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  editItem(index: number) {
    this.items[index].editing = true;
  }

  saveItem(index: number) {
    this.items[index].editing = false;
  }

  cancelEditItem(index: number) {
    this.items[index].editing = false;
  }
}
