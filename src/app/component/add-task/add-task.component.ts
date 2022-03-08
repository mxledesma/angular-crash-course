import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import {Task} from '../../Task';  // This brings the interface of Task
import { Subscription } from 'rxjs';  
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text!:string;
  day!:string;
  reminder:boolean= false;
  subscription!: Subscription;
  showAddTask!:boolean;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();  // Every time you do an event 
  // you need to do an output and eventemitter task

  constructor(private uiService:UiService) {
    // To watch it and respond to the toggle
    // get a value back of true or false and put it back to showAddTask. This is where it gets to be true or false
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask=value));
   }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

  onSubmit(){
    if(!this.text){
      alert('Please add a Task');
      
      return;
    }
  

  const newTask = {   // needs to be inside a method and this does that the user added a task and saved 
    text:this.text,    // go to parent task component once it is set
    day:this.day,
    reminder:this.reminder
  }

  this.onAddTask.emit(newTask);  // This is an emitter defined above
  // @todo emit event
  this.text='';   // needs to be inside a method
  this.day='';
  this.reminder=false;  

  }

}
