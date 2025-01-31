import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TodoService } from '../../shared/services/todo.service';
import { Router } from '@angular/router';
import { TodoItem } from '../../shared/models/todo-item.model';

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

  todoItems:TodoItem[]= [];
  currentPage = 0;
  pageSize=10;
  list: TodoItem[]=[];
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
  this.todoService.fetchTodoItems().subscribe((data: TodoItem[])=>{
    this.todoItems = data;
    this.list=data.slice(this.currentPage * this.pageSize, this.currentPage>0?((this.currentPage+1 *this.pageSize)): this.pageSize);
  });
 }
 editItem(item:string){
  this.router.navigateByUrl('');
 }
 changePage(){
  this.currentPage=1;
  this.pageSize=10
  const currentPageSize =this.currentPage>0?((this.currentPage+1) * this.pageSize) : this.pageSize;
  this.list =this.todoItems.slice(this.currentPage * this.pageSize, currentPageSize)
 }
}
