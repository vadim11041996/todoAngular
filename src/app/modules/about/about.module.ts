import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './containers/about-page/about-page.component';
import {aboutRoutes} from './about.routes';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    aboutRoutes
  ],
  exports: [
    AboutPageComponent
  ],
  declarations: [AboutPageComponent]
})
export class AboutModule { }
