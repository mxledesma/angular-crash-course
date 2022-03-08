import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task';
import {TASKS} from '../../mock-tasks';
import {TaskService} from '../../services/task.service';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

 //from mock-tasks.ts export const TASKS: Task[] = []
  // allTasks : Task[] = TASKS;  
  allTasks : Task[] = []; // for the db.json api




    tasks: any;

  // When working with services, add as a provider need to place in constructor
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // this.allTasks = this.taskService.getTasks();  // not an obeservable
    // tasks is an observable coming from task.services
    this.taskService.getTasks().subscribe((tasks)=> (this.allTasks = tasks));
  }

  // a single object, not the array, no brackets
  deleteTask(task:Task){  // First it is deleted from the server. 
                          // The subscribe is like a .then so we can filter out from the UI
                          // The author in youtube did a filter, i replaced with delete and it worked 
                          // fine and i understand it better
    // this.taskService.deleteTask(task).subscribe(()=> (this.allTasks = this.tasks.delete((t:any)=>t.id 
    // === task.id)));      // The t is the particular iteration in the filter

    // this.taskService.deleteTask(task).subscribe(()=> (this.allTasks = this.tasks.filter((t:any)=>t.id
    // !== task.id)));      // The t is the particular iteration in the filter, task.id is the deleted task
    // this.taskService.deleteTask(task).subscribe((data)=> (this.allTasks = this.tasks.delete(data)));      // The t is the particular iteration in the filter
    this.taskService.deleteTask(task).subscribe(()=>console.log('it is deleted'));
    this.ngOnInit();  // This calls automatically ngOnInit() to udpate immediately
  }


  toggleReminder(task:Task){

    task.reminder=!task.reminder;
    console.log(task.reminder,"Task");
    this.taskService.updateTaskReminder(task).subscribe();  // Regardless that you reload page this updates the server by
    // service method

  }

  addTask(task:Task){  // gives error at $event in the viewer with task:Task needs to be any but somehow it works now
    // console.log(task);  
    this.taskService.addTask(task).subscribe((task)=> this.tasks.push(task));
    this.ngOnInit(); 
 
  }

  // addTask(task: Task) {
  //   this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  // }



}
