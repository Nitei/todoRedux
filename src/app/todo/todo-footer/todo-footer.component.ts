import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import * as filtros from '../../filter/filter.action';
import { Todo } from '../model/todo.model';
import { LimpiarCompletadosTareaAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  filtrosValidos = [ 'todos', 'completados', 'pendientes'];
  filtroActual: filtros.filtrosValidos;
  pendientes;

  constructor(private store: Store<AppState>) {
    this.store.subscribe( state => {
      this.contarPendientes(state.todos);
      this.filtroActual = state.filtro;
    });
   }

  ngOnInit() {
  }

  cambiarFiltro(nuevoFiltro: filtros.filtrosValidos) {
    const accion = new filtros.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(accion);
  }

  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter(todo => {
      return !todo.completado;
    }).length;
  }
  
  borrarTareasCompletadas() {
    const accion = new LimpiarCompletadosTareaAction();
    this.store.dispatch(accion);
  }

}
