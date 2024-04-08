import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {


  //step 8
  uziName:any
  constructor(private _UtilityService:UtilityService) {
    this._UtilityService.userName.subscribe(res=>{console.log("From subject component 2 ",res);
    //.......Service....Observable...sub...(arrow function)..............
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
