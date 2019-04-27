import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import * as filtros from '../../filter/filter.action';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  filtrosValidos = [ 'todos', 'completados', 'pendientes'];
  filtroActual: filtros.filtrosValidos;

  constructor(private store: Store<AppState>) {
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
    })
   }

  ngOnInit() {
  }

  cambiarFiltro(nuevoFiltro: filtros.filtrosValidos) {
    const accion = new filtros.SetFiltroAction(nuevoFiltro)
    this.store.dispatch(accion)
  }

}
