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

        case tareas.TOGGLE_TAREA:
            return state.map( iteraciones => {
                if (action.id === iteraciones.id) {
                    return {
                        ...iteraciones,
                        completado: !iteraciones.completado
                    }
                } else {
                    return iteraciones;
                }
            });
        case tareas.EDITAR_TAREA:
            return state.map( iteracion => {
                if (action.id === iteracion.id) {
                    return {
                        ...iteracion,
                        texto: action.texto
                    }
                } else {
                    return iteracion;
                }
            });

        case tareas.BORRAR_TAREA:
            return state.filter(iteracion => { 
                return iteracion.id !== action.id;
                })

        default:
        console.log(state);
            return state;
    }
}