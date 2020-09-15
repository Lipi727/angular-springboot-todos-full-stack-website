import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as TodoActions from '../actions/todo.actions';
import { TodoService } from 'src/app/components/services/todo.service';



@Injectable({
  providedIn: 'root'
})
export class TodoEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(ofType(TodoActions.loadTodos),
      switchMap(action => this.todoService.getAllTodo()
        .pipe(map((res: any) => TodoActions.loadTodosSuccess({ todo: res })))),
        catchError(error=> of(TodoActions.loadTodosFailure({error})))
        ));

  constructor(private actions$: Actions, private todoService: TodoService) { }

}
