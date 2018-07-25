import { Component, OnInit, OnDestroy } from '@angular/core';
import Todos from '../../../../shared/models/todos';
import {TodoService} from '../../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {

  todoss = [];

  todos: Array<Todos> = [
      {
        id: 1,
        name: 'Run 10 km',
        finished: false,
        finishedAt: {
          date: '08/10/2018',
          description: 'Bla bla bla description',
        }
      }
    ];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoss = this.todoService.getAllTodos();
  }

  ngOnDestroy() {

  }
}
