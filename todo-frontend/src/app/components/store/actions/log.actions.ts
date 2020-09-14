import { Action } from '@ngrx/store';

export enum LogActionTypes {
  LoadLogs = '[Log] Load Logs',
  
  
}

export class LoadLogs implements Action {
  readonly type = LogActionTypes.LoadLogs;
}


export type LogActions = LoadLogs;
