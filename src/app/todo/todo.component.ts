import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { ToogleAllCompletadosTareaAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado = false;
  todos;

  constructor(private store: Store<AppState>) {
    this.store.subscribe( todo =>{
      this.todos = todo.todos;
    })
   }

  ngOnInit() {
  }

  toggleAll() {
    this.completado = !this.completado;
    const accion = new ToogleAllCompletadosTareaAction(this.completado)
    this.store.dispatch(accion)
  }

}
