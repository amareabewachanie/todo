import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TodoService } from '../../shared/services/todo.service';

@Component({
  selector: 'app-to-do-list',
  standalone:false,
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent implements OnChanges  {

 @Input() todoItems: any[]=[];
 @Output() newItemAdded = new EventEmitter<string>();
  @Input() title: string ='';
  item: string = '';
  price: number = 500;
addItem(todoName: string){
  //this.todoItems.push(todoName.value);
   this.newItemAdded.emit(todoName);
}
ngOnChanges(changes: SimpleChanges): void {
  console.log('I am here',changes);
}
}
