import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/containers/home/home.component';
import { TodoComponent } from './modules/todo/containers/todo/todo.component';
import {ContactComponent} from './modules/contact/containers/contact/contact.component';

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
    path: 'contact',
    component: ContactComponent
  }
];
export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
