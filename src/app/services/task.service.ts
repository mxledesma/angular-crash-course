import { Injectable } from '@angular/core';
import {Task} from '../Task';
import {TASKS} from '../mock-tasks';
import { Observable, of } from 'rxjs';  // we dont need of but i will leav it there
import {HttpClient,HttpHeaders} from '@angular/common/http';
// to use httpCLient, httpheaders needs to add app.modules
// An httpclient returns an observable automatically
// import {HttpClientModule} from '@angular/common/http';
// and in the modules imports at bottom of app.modules    HttpClientModule

const httpOptions = {  /// This is for headers
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'

    }
  )
}


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }  // with the private http:HttpClient now can use this

  // getTasks(): Task[]{  // getTasks Method created
  //   return TASKS;
  // }

  getTasks(): Observable<Task[]>{
    // const tasks = of(TASKS);  // Changes TASKS with of to an observable
    // return tasks;   // this tasks goes to task.components
    return this.http.get<Task[]>(this.apiUrl);  // notice that Observable and get has a type Task[]
  }

  deleteTask(task:Task): Observable<Task>{
       const url=`${this.apiUrl}/${task.id}`;
       return this.http.delete<Task>(url);
  }

  updateTaskReminder(task:Task):Observable<Task>{  // to udpate the server by this method which is inside service
    const url=`${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url,task,httpOptions);
}

  addTask(task:Task):Observable<Task>{  // Returns an observable typed Task
    return this.http.post<Task>(this.apiUrl,task,httpOptions);
}

}