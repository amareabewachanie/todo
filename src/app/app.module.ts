import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { ToDoListComponent } from "./todos/to-do-list/to-do-list.component";
import { TextInputComponent } from "./shared/inputs/text-input/text-input.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EtbPipe } from "./shared/pipes/etb.pipe";
import { TodoService } from "./shared/services/todo.service";
import { HttpClientModule } from "@angular/common/http";
import { CreateTodoComponent } from "./todos/create-todo/create-todo.component";
import { EditToDoComponent } from "./todos/edit-to-do/edit-to-do.component";
import { routes } from "./app.routes";

@NgModule({
  imports:[RouterModule.forRoot(routes), BrowserModule,
     CommonModule,FormsModule, HttpClientModule,FormsModule,ReactiveFormsModule],
  declarations:[
    AppComponent, ToDoListComponent, TextInputComponent, EtbPipe, CreateTodoComponent,EditToDoComponent
  ],
  bootstrap:[AppComponent],
  providers:[TodoService],
  exports:[]
})
export class AppModule {

}
