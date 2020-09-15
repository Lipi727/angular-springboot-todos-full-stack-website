import { Component, OnInit } from '@angular/core';
import {  select, Store } from '@ngrx/store';
import {  from, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Todo } from '../../../models/todo';
import { loadTodos } from '../store/actions/todo.actions';
import { TodoState } from '../store/reducers/todo.reducer';
import { getAllTodos } from '../store/selectors/todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  private alive = new Subject<void>();
  todo$!:Observable<Todo[]>;
  displayedColumns: string[] = ['SNo', 'Username', 'Discription', 'TargetDate', 'IsDone', 'Action'];
  constructor(private todoStore: Store<TodoState>) { }

  ngOnInit(): void {
    this.todo$ = this.todoStore.pipe(takeUntil(this.alive), select(getAllTodos));
    this.todoStore.dispatch(loadTodos());
    console.log(this.todo$);
  }

}
