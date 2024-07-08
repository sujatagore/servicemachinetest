import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private _MatsnackBar: MatSnackBar
  ) { }

  openSnackBar(msg: string) {
    this._MatsnackBar.open(msg, 'close',{
      duration : 2500,
      verticalPosition : 'top',
      horizontalPosition : 'center'
    })
  }
}
