import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.css'],
})
export class DialogWindowComponent {
  @Output() saveEvent = new EventEmitter<any>();
  @Output() closeEvent = new EventEmitter();
  name: string = '';
  price: number = 0;

  onClose(action: string) {
    if (action === 'save') {
      this.saveEvent.emit({
        checked: false,
        price: this.price,
        name: this.name,
      });
    } else if (action === 'close') {
      this.closeEvent.emit();
    }
  }
}
