// Aquí se reunen todos los reducers
import { Todo } from './todo/model/todo.model'

export interface AppState {
    todos: Todo[];
}