import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private httpClient = inject(HttpClient);

  fetchTodoItem() {

    return this.httpClient.get(environment.serverAddress);
  }
}
