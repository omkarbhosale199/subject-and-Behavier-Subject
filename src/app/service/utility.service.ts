import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
// create subject ot broadcast the username
// Subject & Behavior Subject is an a Observable
//how to add data in Subject ?
//observer have three method next(),complete(),error(). by using next() method we add data in Observable

//step 1
userName = new Subject<any>();

  constructor() { }


}
