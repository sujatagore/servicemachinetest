import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/shared/module/data.interface';
import { SnackBarService } from 'src/app/shared/service/snack-bar.service';
import { TodoService } from 'src/app/shared/service/todo.service';

@Component({
  selector: 'app-todocard',
  templateUrl: './todocard.component.html',
  styleUrls: ['./todocard.component.scss']
})
export class TodocardComponent implements OnInit {

  todoArr !: Array<Itodo>

  constructor(
    private _todoService : TodoService,
    private _snackBarService: SnackBarService
  ) { }

  ngOnInit(): void {
    this.todoArr = this._todoService.fetchAllTodo()
  }

  onRemove(t : Itodo){
      confirm(`${t.todo} Do You Want to Remove Todo Item !!!`)
      this._todoService.removeTodo(t.id)
      this._snackBarService.openSnackBar(`${t.todo} Todo Item is Removed Successfully!!!!`)
  }

}
