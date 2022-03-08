import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean=false; // by default false . when add is pressed , a subject is created
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask():void{// return nothing
    console.log(13);
    this.showAddTask = !this.showAddTask;  // if this is true then do it

    this.subject.next(this.showAddTask);
  }

  // after the click of toggleAddTask
  //:Observable<any> is optional to type
  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
}
