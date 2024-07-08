import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IGender, Istd } from 'src/app/shared/module/data.interface';
import { StdService } from 'src/app/shared/service/std.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-stdform',
  templateUrl: './stdform.component.html',
  styleUrls: ['./stdform.component.scss']
})
export class StdformComponent implements OnInit {

  @ViewChild('logIn') logInRef !: NgForm

  gender : Array<IGender> = [
    {
      gen : 'Male',
      id : '1'
    },
    {
      gen : 'Female',
      id : '2'
    }
  ]

  constructor(
    private _UuidService : UuidService,
    private _stdService : StdService
  ) { }

  ngOnInit(): void {
  }

  onStdAdd(){
    if (this.logInRef.valid) {
      let std : Istd = {...this.logInRef.value, id:this._UuidService.uuid()}
      console.log(std)
      this.logInRef.reset()
      this._stdService.createNewStd(std)
    }
  }

}
