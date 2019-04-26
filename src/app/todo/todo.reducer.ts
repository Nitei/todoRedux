import * as tareas from './todo.actions';
import { Todo } from './model/todo.model';

// Este es el reducer

const estadoInicial: Todo[] = [];
// const estadoInicial: Todo[] = [
//     {
//         texto: 'Prueba',
//         id: 0.231,
//         completado: false
//     }
// ];

export function tareaReducer ( state = estadoInicial, action: tareas.Acciones ): Todo[] {
    switch (action.type) {
        case tareas.AGREGAR_TAREA:
            const tarea = new Todo(action.texto)
            return [ ...state, tarea ]
        default:
            state
    }
}