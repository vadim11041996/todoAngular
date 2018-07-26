import { Injectable } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoStorageKey = 'todos';

  constructor(private todoService: TodoService) {
  }

  addTodo(todoContent){
    const todos = JSON.parse(localStorage.getItem(this.todoStorageKey)) || [];
    todos.push(todoContent);
    localStorage.setItem(this.todoStorageKey, JSON.stringify(todos));
  }

  getAllTodos() {
    const todos = JSON.parse(localStorage.getItem(this.todoStorageKey)) || [];
    return todos;
  }

  deleteTodo(name: string){
    const todos = JSON.parse(localStorage.getItem(this.todoStorageKey)) || [];
    const resultedTodos = todos.filter(todo => todo.name !== name);
    localStorage.setItem(this.todoStorageKey, JSON.stringify(resultedTodos));
    return resultedTodos;
  }

  deleteAllTodos(){
    localStorage.removeItem(this.todoStorageKey);
  }

  getTodosByName(name: string) {
    const todos = JSON.parse(localStorage.getItem(this.todoStorageKey)) || [];
    const filteredTodos = todos.filter(todo => todo.name.includes(name));
    return filteredTodos ;
  }

}
