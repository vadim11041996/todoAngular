import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/containers/home/home.component';
import { TodoComponent } from './modules/todo/containers/todo/todo.component';
import {AboutPageComponent} from './modules/about/containers/about-page/about-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'about',
    component: AboutPageComponent,
    // loadChildren: './modules/about/about.module#AboutModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
