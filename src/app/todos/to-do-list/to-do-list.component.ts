import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TodoService } from '../../shared/services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  standalone:false,
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent implements OnInit{
  @Input() title: string ='';
  item: string = '';
  price: number = 500;

  todoItems:any[]= []

  constructor(private todoService: TodoService, private router: Router) {

    }
addItem(todoName: string){
  this.todoItems?.push({
    userId: 1,
    id: 1,
    title: todoName,
    completed: false
})
}
 ngOnInit(): void {
  this.todoService.fetchTodoItem().subscribe((data: any)=>{
    this.todoItems = data;
  });
 }
 editItem(item:string){
  this.router.navigateByUrl('');
 }
}
