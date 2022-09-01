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
  @Output() updateItemEvent = new EventEmitter<Todo>();
  
  constructor() { }
  displayEdit:boolean = false;
  editToDo : Todo = {completed : false, task:''};;
  ngOnInit(): void {
   this.editToDo = {...this.todo};
  }

  markAsComplete(taskName:string|undefined):any{
    this.markItemAsCopleteEvent.emit(taskName);
    
  }
  removeTask(taskName:string|undefined):any{
    this.remvoeItemEvent.emit(taskName);
  }
  toggleEdit() : void {
    this.displayEdit = !this.displayEdit;
  }
  saveChanges() : void{
    this.todo = {...this.editToDo};
    this.updateItemEvent.emit(this.todo);
    this.displayEdit = false;
  }

}
