import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  newTodoName:string ='';
  @Output() saveEvent = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit(): void {
  }

  addTask():any{
    if (this.newTodoName !== ''){
      let newTodo:Todo = {completed : false,task : this.newTodoName};
      this.saveEvent.emit(newTodo);
    }   
    this.newTodoName = '';
  } 
}
