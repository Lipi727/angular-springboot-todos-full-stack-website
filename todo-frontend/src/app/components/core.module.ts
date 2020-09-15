import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { LogEffects } from './store/effects/log.effects';
import { TodoService } from './services/todo.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([LogEffects])
  ],
  providers:[
    TodoService
  ]
})
export class CoreModule { }
