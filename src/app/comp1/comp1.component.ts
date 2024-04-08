import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  // step 3
 uziName:any

 //step 4
  constructor(private _UtilityService:UtilityService) {
    // Read value
    this._UtilityService.userName.subscribe(res=>{console.log("From subject component 1 ",res);
    //..................Observable....................
    this.uziName=res;
    // (maybe no need here because we change here method -->>>updateUsername(userName:any)is here)
    // assign res to uziName because it is in {{uziName}} in html file to show display
    //(without this it will work ? maybe y)
    })
   }

  ngOnInit(): void {
  }
  //step 5
  // this  method add latest value in Subject observable
  updateUsername(userName:any){
   console.log(userName.value);
   this.uziName=userName.value; // IMP to Show on DOM ele (in html file)
   this._UtilityService.userName.next(this.uziName);
// to accessing service for without relationship data sending
// we need to access new Subject<any>(); this but new Subject<any>(); assign to userName
// this._UtilityService.userName.next(userName.value);  // or -->>  this._UtilityService.userName.next(this.uziName);
//get a value

  }
}
