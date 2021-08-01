import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  getAllTodo() {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });

    return this.http.get('http://localhost:9090/users/user/todos', {headers});
  }

  // Access to XMLHttpRequest at 'http://localhost:9090/users/user/todos'
  // from origin 'http://localhost:4200' has been blocked by CORS policy: No
  //  'Access-Control-Allow-Origin'
  // header is present on the requested resource.

  // Access to XMLHttpRequest at 'http://localhost:9090/users/user/todos' from origin 
  // 'http://localhost:4200' has been blocked by CORS policy: Response to preflight request doesn't 
  // pass access control check: It does not have HTTP ok status.
  createBasicAuthenticationHttpHeader() {
    let username = 'Lipi'
    let password = '12345'
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password)
    return basicAuthHeaderString;
  }

  constructor(private http: HttpClient) {}
}
