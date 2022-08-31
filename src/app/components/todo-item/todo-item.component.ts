import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo = {completed : false, task:''};
  @Output() markItemAsCopleteEvent = new EventEmitter<string>();
  @Output() remvoeItemEvent = new EventEmitter<string>();
  strikeCss:string = '';
  constructor() { }

  ngOnInit(): void {
    this.strikeCss =  this.todo.completed == true ? 'strike' :'';
  }

  markAsComplete(taskName:string|undefined):any{
    this.markItemAsCopleteEvent.emit(taskName);
    this.strikeCss =  this.todo.completed == true ? 'strike' :'';
  }
  removeTask(taskName:string|undefined):any{
    this.remvoeItemEvent.emit(taskName);
  }

}
