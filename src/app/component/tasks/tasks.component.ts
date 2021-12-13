import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task';
import {TASKS} from '../../mock-tasks';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

 //from mock-tasks export const TASKS: Task[] = []
  // allTasks : Task[] = TASKS;
  allTasks : Task[] = [];

  // When working with services need to place in constructor
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // this.allTasks = this.taskService.getTasks();
    // tasks is an observable coming from task.services line 18, 19
    this.taskService.getTasks().subscribe((tasks)=> (this.allTasks = tasks));
  }

}
