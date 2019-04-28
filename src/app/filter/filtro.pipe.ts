import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import { filtrosValidos } from './filter.action';

@Pipe({
  name: 'FiltroTareaPipe',
  pure: false
})
export class FiltroTareaPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    switch (filtro) {
      case 'completados':
        return todos.filter( item => item.completado );
      case 'pendientes':
        return todos.filter( item => !item.completado );
      default:
        return todos;
    }
  }


}
