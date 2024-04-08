import { Component, OnInit } from '@angular/core';
import { ForbehaviorsubService } from '../service/forbehaviorsub.service';

@Component({
  selector: 'app-compforbehaviorsub8',
  templateUrl: './compforbehaviorsub8.component.html',
  styleUrls: ['./compforbehaviorsub8.component.css']
})
export class Compforbehaviorsub8Component implements OnInit {

//step 5
sharmistra:any;

//step 2
  constructor(private _ForbehaviorsubService:ForbehaviorsubService) {
    this._ForbehaviorsubService.behavName.subscribe(res=>{console.log(res);
      //step 6
this.sharmistra=res;
    })
  }

  ngOnInit(): void {
  }
  // step 3~4
 neoMethod(perio:any){
  console.log(perio.value);
  this.sharmistra=perio.value
  this._ForbehaviorsubService.behavName.next(this.sharmistra);
 }
}
