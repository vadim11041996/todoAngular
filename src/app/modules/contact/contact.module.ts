import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './containers/contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ContactComponent,
  ],
  declarations: [ContactComponent],
})
export class ContactModule { }
