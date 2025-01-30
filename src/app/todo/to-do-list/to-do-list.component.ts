import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TodoService } from '../../shared/services/todo.service';

@Component({
  selector: 'app-to-do-list',
  standalone:false,
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent implements OnChanges, OnChanges,DoCheck  {

 @Input() todoItems: any[]=[];
 @Output() newItemAdded = new EventEmitter<string>();
  @Input() title: string ='';
  item: string = '';
  price: number = 500;
addItem(todoName: string){
  //this.todoItems.push(todoName.value);
   this.newItemAdded.emit(todoName);
}
ngDoCheck(): void {
  console.log('I am here in do check');

 }
 ngOnInit(): void {
   console.log('I am here on init');
 }
 ngOnChanges(changes: SimpleChanges): void {
   console.log('I am here on change');
 }
}
