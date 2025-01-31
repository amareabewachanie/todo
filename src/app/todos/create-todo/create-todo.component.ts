import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-todo',
  standalone: false,
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.css'
})
export class CreateTodoComponent {
  task: string='';
  @Output() itemAdded = new EventEmitter<string>();
  addNewItem(name:string){
    console.log(name);

    this.itemAdded.emit(name)
  }
}
