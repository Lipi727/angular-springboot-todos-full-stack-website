import { Action, createReducer, on } from '@ngrx/store';
import * as TodoActions from '../actions/todo.actions';

export const todoFeatureKey = 'todo';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(TodoActions.loadTodos, state => state),
  on(TodoActions.loadTodosSuccess, (state, action) => state),
  on(TodoActions.loadTodosFailure, (state, action) => state),

);

