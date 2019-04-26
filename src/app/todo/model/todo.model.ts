// Está es la clase

export class Todo {
    constructor(
        public texto: string,
        public id: number = Math.random(),
        public completado: boolean = false
         ) {
            texto = texto.charAt(0).toUpperCase() + texto.slice(1);
    }
}