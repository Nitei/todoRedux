import { Action } from '@ngrx/store';

export const AGREGAR_TAREA = '[TODO] Agregar tarea';
export const TOGGLE_TAREA = '[TODO] Toggle tarea';
export const EDITAR_TAREA = '[TODO] Editar tarea';
export const BORRAR_TAREA = '[TODO] Borrar tarea';
export const TOGGLE_ALL_COMPLETADOS_TAREA = '[TODO] Toogle all completados tarea';
export const BORRAR_COMPLETADOS_TAREA = '[TODO] borrar todos los completados tarea';

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
export class BorrarTareaAction implements Action {
    readonly type = BORRAR_TAREA;

    constructor(public id: number) {}
}
export class ToogleAllCompletadosTareaAction implements Action {
    readonly type = TOGGLE_ALL_COMPLETADOS_TAREA;

    constructor(public completado: boolean) {}
}
export class LimpiarCompletadosTareaAction implements Action {
    readonly type = BORRAR_COMPLETADOS_TAREA;
}

export type Acciones =
ToggleTareaAction |
BorrarTareaAction |
EditarTareaAction |
ToogleAllCompletadosTareaAction |
LimpiarCompletadosTareaAction |
AgregarTareaAction;
