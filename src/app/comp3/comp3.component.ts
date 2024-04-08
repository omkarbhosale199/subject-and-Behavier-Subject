import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  uziName:any
  constructor(private _UtilityService:UtilityService) {
    this._UtilityService.userName.subscribe(res=>{console.log("From subject component 3 ",res);
   //..................Observable....................
   this.uziName=res; // IMP
    })
   }

  ngOnInit(): void {
  }
  updateUsername(userName:any){
    console.log(userName.value);
    this.uziName=userName.value;
    this._UtilityService.userName.next(this.uziName);
  }

}
