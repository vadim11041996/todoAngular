import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './modules/todo/containers/todo/todo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'about',
    loadChildren: './modules/about/about.module#AboutModule'
  }
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
