import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import { Todo } from '../../../../models/todo';
import * as TodoActions from '../actions/todo.actions';
import * as fromRoot from '../../../../store/reducers/index';

export const todoFeatureKey = 'todo';
export interface State  extends fromRoot.State{
todoState:TodoState
}

export interface TodoState extends EntityState<Todo>{
  error:any;
}
export const todoAdapter:EntityAdapter<Todo>=createEntityAdapter<Todo>();

export const todoInitialState: TodoState = todoAdapter.getInitialState({
  error:null
});


export const todoReducer = createReducer(
  todoInitialState,
  on(TodoActions.loadTodos, state =>state),
  on(TodoActions.loadTodosSuccess, (state, {todo}) =>{
    return todoAdapter.setAll(todo, state);
  }),
  on(TodoActions.loadTodosFailure, (state, action) => state),

);

