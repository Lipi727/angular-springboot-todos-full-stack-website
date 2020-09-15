import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromTodo from 'src/app/components/todo/store/reducers/todo.reducer';


export interface State {
todo:fromTodo.TodoState
}

export const reducers: ActionReducerMap<State> = {
todo:fromTodo.todoReducer
};

export const selectTodoState = createFeatureSelector<fromTodo.TodoState>('todo');

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
