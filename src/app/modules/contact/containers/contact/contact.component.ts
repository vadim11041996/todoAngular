import { Component, OnInit } from '@angular/core';
import Contacts from '../../../../shared/models/contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted = false;

  contacts: Array<Contacts> = [
    {
      name: 'Insert name',
      surname: 'Insert surname',
      email: 'Insert email',
      text: 'Insert text',
    }
  ];

  constructor(){ }

  onSubmit (contacts: string) {
    console.log(data);
    this.submitted = true;
  }

  ngOnInit() { }

}
