import { Injectable } from '@angular/core';
import { Itodo } from '../module/data.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoArr : Array<Itodo> = [
    {
      todo : 'html',
      id : '1256'
    },
    {
      todo : 'Javascript',
      id : '34564'
    },
    {
      todo : 'Angular',
      id : '126'
    }
  ]

  constructor(
    private _snackBarService: SnackBarService
  ) { }

  fetchAllTodo(): Itodo[] {
    return this.todoArr
  }

  createNewTodo(newTodo : Itodo){
    this.todoArr.push(newTodo)
    this._snackBarService.openSnackBar(`New ${newTodo.todo} Todo Item is Added Successfully!!!!`)
  }

  removeTodo(id : string){
      let getTodoRemove = this.todoArr.findIndex(t => t.id === id)
      this.todoArr.splice(getTodoRemove, 1)
  }
}
