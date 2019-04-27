// Aquí se reunen todos los reducers
import { Todo } from './todo/model/todo.model'
import { ActionReducer, ActionReducerMap } from '@ngrx/store';

import * as todo from './todo/todo.reducer';
import * as filtro from './filter/filtro.reducer';
import { filtrosValidos } from './filter/filter.action';

export interface AppState {
    todos: Todo[];
    filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todo.tareaReducer,
    filtro: filtro.filtroReducer
}