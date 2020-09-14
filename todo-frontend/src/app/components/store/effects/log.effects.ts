import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { LogActionTypes, LogActions } from '../actions/log.actions';



@Injectable()
export class LogEffects {


  @Effect()
  loadLogs$ = this.actions$.pipe(
    ofType(LogActionTypes.LoadLogs),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<LogActions>) {}

}
