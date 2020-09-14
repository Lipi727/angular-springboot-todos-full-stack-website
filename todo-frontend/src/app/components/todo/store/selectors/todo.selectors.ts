import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodo from '../reducers/todo.reducer';

export const selectTodoState = createFeatureSelector<fromTodo.State>(
  fromTodo.todoFeatureKey
);
