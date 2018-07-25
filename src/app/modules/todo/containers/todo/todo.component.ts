import { Component, OnInit, OnDestroy } from '@angular/core';
import {TodoService} from '../../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {

  todoss = [];
  contactForm: FormGroup;
  submitted = false;

  constructor(private todoService: TodoService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      site: ['', UrlValidator],
      message: ['', Validators.required]
    });

    this.todoss = this.todoService.getAllTodos();
  }


  ngOnDestroy() {
  }


  // convenience getter for easy access to form fields
  get f() {
    return this.contactForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    alert('SUCCESS!! 💪 \n\n' + JSON.stringify(this.contactForm.value));
  }


}
