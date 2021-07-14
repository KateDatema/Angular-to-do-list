import { Component } from '@angular/core';
import { Todo } from './todo';
import {FormsModule, NgForm} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})


export class TodoComponent {
  
  listOfTodo: Todo[] = [
    {task: "Mow", completed: true},
    {task: "Clean", completed: false},
    {task: "Pull out Carpet", completed: false},
    {task: "Power Wash", completed: false},
    {task: "Check what wall can stay", completed: false},
  ]

  addTask(addTaskForm: NgForm){
   let taskName = addTaskForm.form.value.task
   let newTask: Todo = {task: taskName, completed: false}
   this.listOfTodo.push(newTask);
  }

  changeStatus(i: number){
    if (this.listOfTodo[i].completed == false)
    {this.listOfTodo[i].completed = true}
    else
    {this.listOfTodo[i].completed = false}

  }

  delete(i:number)
  {
    let index = this.listOfTodo[i];
    let remove = this.listOfTodo.splice(i, 1)

  }

  
  search(SearchTaskForm: NgForm): void {
    this.listOfTodo = this.listOfTodo.filter((Todo) => Todo.task.toLowerCase().includes(SearchTaskForm.form.value.task.toLowerCase()));
  }

   
      
    
  

}
