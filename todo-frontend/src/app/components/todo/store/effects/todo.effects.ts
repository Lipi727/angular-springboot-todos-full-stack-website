import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as TodoActions from '../actions/todo.actions';



@Injectable()
export class TodoEffects {

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(TodoActions.loadTodos),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => TodoActions.loadTodosSuccess({ data })),
          catchError(error => of(TodoActions.loadTodosFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
