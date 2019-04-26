import { Action } from '@ngrx/store';

export const AGREGAR_TAREA = '[TODO] Agregar tarea';

export class AgregarTareaAction implements Action {
    readonly type = AGREGAR_TAREA;

    constructor(public texto: string) {}
}

export type Acciones =
AgregarTareaAction;