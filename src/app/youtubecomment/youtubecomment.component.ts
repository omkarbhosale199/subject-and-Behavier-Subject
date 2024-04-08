import { Component, OnInit } from '@angular/core';
import { YtService } from '../service/yt.service';

@Component({
  selector: 'app-youtubecomment',
  templateUrl: './youtubecomment.component.html',
  styleUrls: ['./youtubecomment.component.css']
})
export class YoutubecommentComponent implements OnInit {

  userComment:any;
  constructor(private _YtService :YtService) {
    this._YtService.varForSubj.subscribe(res=>{console.log(res);})
  }
  ngOnInit(): void {
  }
Comment(userInput:any){
this._YtService.varForSubj.next(userInput.value);
// console.log(userInput.value); // get value in inspect
this.userComment=userInput.value; // or detect pass userInput.value in html using {{}} -->> {{userInput.value}}
}
}
