import { Action } from '@ngrx/store';

export const AGREGAR_TAREA = '[TODO] Agregar tarea';
export const TOGGLE_TAREA = '[TODO] Toggle tarea';
export const EDITAR_TAREA = '[TODO] Editar tarea';

export class AgregarTareaAction implements Action {
    readonly type = AGREGAR_TAREA;

    constructor(public texto: string) {}
}

export class ToggleTareaAction implements Action {
    readonly type = TOGGLE_TAREA;

    constructor(public id: number) {}
}

export class EditarTareaAction implements Action {
    readonly type = EDITAR_TAREA;

    constructor(public texto: string, public id: number) {}
}

export type Acciones =
ToggleTareaAction |
EditarTareaAction |
AgregarTareaAction;
