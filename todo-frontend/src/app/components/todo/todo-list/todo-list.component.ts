import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  username!:string;
  constructor(private todoStore: Store<TodoState>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.todo$ = this.todoStore.pipe(takeUntil(this.alive), select(getAllTodos));
    this.todoStore.dispatch(loadTodos());
    this.username=this.route.snapshot.params['username'];
  }

}
