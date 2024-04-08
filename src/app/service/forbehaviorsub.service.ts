import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForbehaviorsubService {
  //step 1
behavName= new BehaviorSubject <any>('omkar')
  constructor() { }
}
