import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo[];

  constructor() {

   }

  ngOnInit() {
  }

}
