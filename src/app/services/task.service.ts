import { Injectable } from '@angular/core';
import {Task} from '../Task';
import {TASKS} from '../mock-tasks';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // getTasks(): Task[]{  // getTasks Method created
  //   return TASKS;
  // }

  getTasks(): Observable<Task[]>{
    const tasks = of(TASKS);  // Changes TASKS with of to an observable
    return tasks;   // this tasks goes to task.components
  }
}
