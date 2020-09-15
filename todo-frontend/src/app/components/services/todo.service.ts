import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
 
  getAllTodo(){
    return this.http.get('http://localhost:8080/users/user/todos');
  }
  
  constructor(private http:HttpClient) { }
}
