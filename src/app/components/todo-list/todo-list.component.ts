import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  taskList:Todo[] = [
      {completed: true,task:"Bake a cake"},
      {completed: false,task:"Light a candle"},
      {completed: false,task:"Take a break"},
      {completed: false,task:"Look like a boss"}

  ];
  filteredList:Todo[] = [];
  filter:string = '';
  constructor() { }

  ngOnInit(): void {
  }
  markAsComplete(taskName:string):void{
    let task = this.taskList.filter(t => t.task === taskName);
    if (task !== undefined){
      task[0].completed=true;      
    }
  }
  removeTask(taskName:string):void{
    let task = this.taskList.filter(t => t.task === taskName);
    if (task !== undefined){
      let idx: number = this.taskList.findIndex(w => w == task[0]);
      this.taskList.splice(idx, 1);
    }
  }
  addNewTask(newTodo:Todo):void{
    let task = this.taskList.filter(t => t.task === newTodo.task);
    if (task.length === 0){     
      this.taskList.push(newTodo);
    }
  }
  searchTodo(e:any):void {
    this.filter = e;
    console.log(e)
    if (this.filter.length > 0){
      this.filteredList = this.taskList.filter(t => t.task.includes(this.filter));
    }
    else{
      this.filteredList = [];
    }

  }
  updateTask(myTodo:Todo):void{
    let task = this.taskList.filter(t => t.task === myTodo.task);
    if (task !== undefined){     
      task[0] = myTodo;
    }
  }
}
