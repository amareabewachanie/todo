import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TodoItem } from '../models/todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private httpClient = inject(HttpClient);
  serverAddress = environment.serverAddress;

  fetchTodoItems() {
    return this.httpClient.get(this.serverAddress);
  }
  fetchTodoItem(id: number) {
    return this.httpClient.get(`${this.serverAddress}/${id}`);
  }
  addTodoItem(todoItem: TodoItem) {
   return this.httpClient.post(`${this.serverAddress}`,todoItem);
  }
}

