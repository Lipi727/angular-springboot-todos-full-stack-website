import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../../shared/shared.module'
import { TodoEffects } from './store/effects/todo.effects';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoEditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    EffectsModule.forFeature([TodoEffects])
  ],
  exports:[
    TodoListComponent,
    TodoEditComponent,
  ]
})
export class TodoModule { }
