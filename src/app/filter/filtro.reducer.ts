import * as filtro from './filter.action';

const estadoInicial: filtro.filtrosValidos = 'todos';

export function filtroReducer(state = estadoInicial, action: filtro.acciones): filtro.filtrosValidos {
    switch (action.type) {
        case filtro.SET_FILTRO:
            return action.filtro;

        default:
            return state;
    }
}
