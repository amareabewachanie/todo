import { Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-text-input',
  standalone: false,
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css'
})
export class TextInputComponent {
 @Output() itemAdded = new EventEmitter<string>();
 todo = '';
  addItem(){
    this.itemAdded.emit(this.todo);
    this.todo='';
  }
}
