import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private httpClient = inject(HttpClient);

  fetchTodoItem() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
  }
}
