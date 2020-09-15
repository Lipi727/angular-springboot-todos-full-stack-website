import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodo from '../reducers/todo.reducer';
import { TodoState, todoAdapter } from '../reducers/todo.reducer';

export const selectTodoState = createFeatureSelector<fromTodo.TodoState>(
  fromTodo.todoFeatureKey
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = todoAdapter.getSelectors(selectTodoState);

export const getAllTodos = selectAll;
