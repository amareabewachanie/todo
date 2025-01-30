import { Component } from '@angular/core';

@Component({
  selector: 'app-create-todo',
  standalone: false,
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.css'
})
export class CreateTodoComponent {
  task: string='';
  addNewItem(name:string){
     console.log('Item added', name);

  }
}
