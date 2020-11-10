import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'eat dinner',
      completed: false,
    },
    {
      task: 'walk dog',
      completed: false,
    },
    {
      task: 'attend class',
      completed: true,
    },
    {
      task: 'grocery shopping',
      completed: false,
    },
    {
      task: 'play games',
      completed: false,
    },
    {
      task: 'visit mother',
      completed: false,
    },
  ];
  filterSearchTerm: string = '';
  constructor() {}

  ngOnInit(): void {}
  addTodo = (form: NgForm): void => {
    let newTodo: Todo = {
      task: form.value.addTodo,
      completed: false,
    };
    this.todos.push(newTodo);
    form.reset();
  };

  filterTodos = (): Todo[] => {
    if (!this.filterSearchTerm) {
      return this.todos;
    } else {
      return this.todos.filter((todo: Todo) => {
        let currentTodo = todo.task.toLowerCase().trim();
        return currentTodo.includes(this.filterSearchTerm.toLowerCase().trim());
      });
    }
  };
  setFilterSearchTerm = (form: NgForm): void => {
    this.filterSearchTerm = form.value.searchTerm;
  };

  removeTodo = (index: number): void => {
    this.todos.splice(index, 1);
  };

  completeTodo = (index: number): void => {
    this.todos[index].completed = true;
  };
}
