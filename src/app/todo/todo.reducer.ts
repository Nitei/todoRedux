import * as tareas from './todo.actions';
import { Todo } from './model/todo.model';

// Este es el reducer

const todo1 = new Todo('Vencer a thanos');
const todo2 = new Todo('Salvar el mundo');
const todo3 = new Todo('Pedir prestado el traje a ironman');
const estadoInicial: Todo[] = [todo1, todo2, todo3];

todo2.completado = true;
// const estadoInicial: Todo[] = [
//     {
//         texto: 'Prueba',
//         id: 0.231,
//         completado: false
//     }
// ];
export function tareaReducer( state = estadoInicial, action: tareas.Acciones ): Todo[] {
    switch (action.type) {
        case tareas.AGREGAR_TAREA:
            const tarea = new Todo(action.texto);
            return [ ...state, tarea ];
        default:
            return state;
    }
}