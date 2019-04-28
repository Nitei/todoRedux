import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { ToggleTareaAction, EditarTareaAction, BorrarTareaAction } from '../todo.actions';

interface Todos {
  todo: Todo[];
  texto: string;
  id: number;
  completado: boolean;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})


export class TodoItemComponent implements OnInit {
  @Input() todo: Todos;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;


  chkField: FormControl;
  txtInput: FormControl;

  editando: boolean;

  constructor(private store: Store<AppState>) {
   }

  ngOnInit() {
    this.chkField = new FormControl(this.todo['completado']);
    this.txtInput = new FormControl(this.todo['texto'], Validators.required);

    this.chkField.valueChanges.subscribe(data => {
      const accion = new ToggleTareaAction(this.todo['id'])
      this.store.dispatch(accion)
    })
  }

  editar() {
    this.editando = !this.editando;
    setTimeout(() => { this.txtInputFisico.nativeElement.select(); }, 1);
  }

  terminarEdicion() {
    this.editando = !this.editando;
    if (
      this.txtInputFisico.nativeElement.value !== this.todo['texto'] &&
      this.txtInput.valid
      ) {
      const accion = new EditarTareaAction(this.txtInputFisico.nativeElement.value, this.todo['id']);
      this.store.dispatch(accion)
    }
  }

  borrarTarea() {
    const accion = new BorrarTareaAction(this.todo['id'])
    this.store.dispatch(accion)
  }

}
