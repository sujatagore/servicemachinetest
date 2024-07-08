import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/shared/module/data.interface';
import { SnackBarService } from 'src/app/shared/service/snack-bar.service';
import { TodoService } from 'src/app/shared/service/todo.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {

  @ViewChild('todoItem') todoItemRef !: NgForm

  constructor(
    private _todoService : TodoService,
    private _UuidService : UuidService,
  ) { }

  ngOnInit(): void {
  }

  onTodoAdd(){
    if (this.todoItemRef.valid) {
      let todo :Itodo = {...this.todoItemRef.value, id:this._UuidService.uuid()}
      this.todoItemRef.reset()
      this._todoService.createNewTodo(todo)
    }
  }

}
