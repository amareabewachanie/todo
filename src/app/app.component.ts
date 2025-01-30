import { ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TodoService } from './shared/services/todo.service';
@Component({
  standalone:false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title: any = 'Todo List';
   todoItems:any[]= []

constructor(private todoService: TodoService) {

  this.todoService.fetchTodoItem().subscribe((data: any)=>{
    this.todoItems = data;
  });

  }
}
