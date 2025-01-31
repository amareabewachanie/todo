import { Routes } from '@angular/router';
import { ToDoListComponent } from './todos/to-do-list/to-do-list.component';
import { CreateTodoComponent } from './todos/create-todo/create-todo.component';
import { EditToDoComponent } from './todos/edit-to-do/edit-to-do.component';

export const routes: Routes = [
  {
    path:'home',
    pathMatch:'full',
    component:ToDoListComponent
  },
  {
    path:'create',
    pathMatch:'full',
    component: CreateTodoComponent
  },
  {
    path:'edit/:id',
    pathMatch:'full',
    component: EditToDoComponent
  },
  {
    path:'*',
    redirectTo:'home'
  }
];
