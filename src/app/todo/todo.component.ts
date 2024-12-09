import { Component } from '@angular/core';
import { Todo } from '../todo.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todos: Todo[] = [];
  newtask : string = '';

  addTask() {
    if(this.newtask.trim()){
      const newTodo: Todo = {
        task: this.newtask,
        completed: false
      }
      this.todos.push(newTodo);
      this.newtask = '';
    }
  }

  toggleComplete(todo: Todo) :void{
    todo.completed = !todo.completed;
  }

  deleteTask(ntodo: string){
    this.todos = this.todos.filter(todo => todo.task != ntodo)
  }
}
