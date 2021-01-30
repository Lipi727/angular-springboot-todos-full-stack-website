import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import {  select, Store } from '@ngrx/store';
import {  from, Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { initialTodo, Todo } from '../../../models/todo';
import { DeleteDialogComponent } from '../dialog/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../dialog/edit-dialog/edit-dialog.component';
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

  todo$!:Observable<Todo[]>; /// = of(initialTodo);
  displayedColumns: string[] = ['SNo', 'Username', 'Discription', 'TargetDate', 'IsDone', 'Action'];
  username!:string;

  constructor(private todoStore: Store<TodoState>, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.todo$ = this.todoStore.pipe(takeUntil(this.alive), select(getAllTodos));
    this.todoStore.dispatch(loadTodos());
    this.username=this.route.snapshot.params['username'];
  }

  openEditDialog(){
    const dialogRef = this.dialog.open(EditDialogComponent);
  }

  openDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteDialogComponent);
  }
}
