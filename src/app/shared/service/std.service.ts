import { Injectable } from '@angular/core';
import { Istd } from '../module/data.interface';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class StdService {

  StdArr : Array<Istd> = [
    {
      fname : 'Jhon',
      lname : 'Doe',
      email : 'jD@gmail.com',
      contact : 235654132,
      gender : 'Male',
      id : '566'
    },
    {
      fname : 'Jelly',
      lname : 'Hung',
      email : 'jD21151@gmail.com',
      contact : 54541211132,
      gender : 'Female',
      id : '541'
    }
  ]

  constructor(
    private _snackBarService: SnackBarService
  ) { }

  fetchAllStd(): Istd[] {
      return this.StdArr
  }

  createNewStd(newStd : Istd){
    this.StdArr.push(newStd);
    this._snackBarService.openSnackBar(`${newStd.fname} ${newStd.lname} Student is Added Successfully!!!!`)
  }

  removeStd(id : string){
    let getStdRemove = this.StdArr.findIndex(s => s.id === id);
    this.StdArr.splice(getStdRemove, 1)
    
  }
}
