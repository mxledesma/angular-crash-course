import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
// Everytime you need an event emitter , you need an output
import {Task} from '../../Task'; // Task.ts
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // fatimes is the X to close a component


/*  from Task.ts
    id?: number;
    text:string;
    day:string;
    reminder:Boolean;
*/
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input()  taskItems!: Task;
  @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder : EventEmitter<Task> = new EventEmitter();
  @Input()  text!: string;

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {  }

  // Note, this onDelete is for the Eventemitter once when the X is clicked.
  // Without it, the click will not work and cannot listen to any event
  onDelete(taskItems:Task){  // type can be any as well
    console.log(taskItems);
    this.onDeleteTask.emit(taskItems);
  }

  onToggle(taskItems:Task){  // type can be any as well. OnToggle is in the view of task-item.component.html
    // alert('Vertical bars are reminders');
    this.onToggleReminder.emit(taskItems);  // onToggleReminder is an event emitter
  }

}
