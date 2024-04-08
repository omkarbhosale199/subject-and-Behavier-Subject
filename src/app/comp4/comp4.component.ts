import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
  uziName:any
  constructor(private _UtilityService:UtilityService) {
    this._UtilityService.userName.subscribe(res=>{console.log("From subject component 4 ",res);
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
