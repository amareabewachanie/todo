import { ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TodoService } from './shared/services/todo.service';
@Component({
  standalone:false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnChanges, DoCheck{
  title: any = 'Todo List';
   todoItems:any[]= []

constructor(private todoService: TodoService) {


}
  ngDoCheck(): void {
   console.log('I am here in do check');

  }
  ngOnInit(): void {
    console.log('I am here on init');

    this.todoService.fetchTodoItem().subscribe((data: any)=>{
      this.todoItems = data;
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('I am here on change');
  }

  // summary(): string {
  //   return `${this.completedTodos.length} tasks has been done.`
  // }
  itemAdded(newItem: string){
    this.todoItems.push({
      userId: 1,
      id: 1,
      title: newItem,
      completed: false
  });

  }
}
