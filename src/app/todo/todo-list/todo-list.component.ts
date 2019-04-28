import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';
import { filtrosValidos } from '../../filter/filter.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filtro: filtrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.filtro = state.filtro;
      this.todos = state.todos;
    })
  }

}
