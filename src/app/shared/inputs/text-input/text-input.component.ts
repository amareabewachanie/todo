import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-text-input',
  standalone: false,
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css'
})
export class TextInputComponent implements OnInit{

 @Output() itemAdded = new EventEmitter<string>();
 todo = '';
  addItem(){
    this.itemAdded.emit(this.todo);
    this.todo='';
  }
  ngOnInit(): void {
    console.log('Method not implemented.');
  }
}
