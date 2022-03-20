import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/login/logout/logout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TodoEditComponent } from './components/todo/todo-edit/todo-edit.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  {path: 'todos/:username', component:TodoComponent, children:[
    {path:'new', component:TodoEditComponent},
    {path: ':id/edit', component:TodoEditComponent}
  ], canActivate:[RouteGuardService]},
  {path: 'login', component:LoginComponent},
  {path: 'logout', component:LogoutComponent},
  {path:'' ,redirectTo:'/login', pathMatch:'full'},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
