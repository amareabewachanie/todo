import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { ToDoListComponent } from "./todo/to-do-list/to-do-list.component";
import { TextInputComponent } from "./shared/inputs/text-input/text-input.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { EtbPipe } from "./shared/pipes/etb.pipe";
import { TodoService } from "./shared/services/todo.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports:[RouterModule, BrowserModule, CommonModule,FormsModule, HttpClientModule],
  declarations:[
    AppComponent, ToDoListComponent, TextInputComponent, EtbPipe
  ],
  bootstrap:[AppComponent],
  providers:[TodoService],
  exports:[]
})
export class AppModule {

}
