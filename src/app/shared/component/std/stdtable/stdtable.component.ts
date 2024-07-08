import { Component, OnInit } from '@angular/core';
import { Istd } from 'src/app/shared/module/data.interface';
import { SnackBarService } from 'src/app/shared/service/snack-bar.service';
import { StdService } from 'src/app/shared/service/std.service';

@Component({
  selector: 'app-stdtable',
  templateUrl: './stdtable.component.html',
  styleUrls: ['./stdtable.component.scss']
})
export class StdtableComponent implements OnInit {

  StdArr !: Array<Istd>

  constructor(
    private _stdService : StdService,
    private _snackBarService: SnackBarService
  ) { }

  ngOnInit(): void {
    this.StdArr = this._stdService.fetchAllStd()
  }

  onRemove(d: Istd){
    confirm(`${d.fname} ${d.lname} Do You Want to Remove Student!!!!`)
    this._stdService.removeStd(d.id)
    this._snackBarService.openSnackBar(`${d.fname} ${d.lname} Student is Removed Successfully!!!!`)
  }
}
