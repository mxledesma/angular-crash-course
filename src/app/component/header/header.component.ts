import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title : string = 'Task Tracker';
  // showAddTask!:boolean;
  showAddTask:boolean=false;  // it is false by default. need to set true for red and false for green
  subscription!: Subscription;  // use this subscription to the toggle

  constructor(private uiService:UiService, private router:Router) {
// To watch it
// get a value back of true or false and put it back to showAddTask. This is where it gets to be true or false
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask=value));


   }  // When adding a service need to be inside constructor

   // Life cycle method to load a component
  ngOnInit(): void {}

  toggleAddTask(){
       console.log('toggle dammit')
      this.uiService.toggleAddTask();  // toggleAddtask() is inside the uiService.

    }
  
    hasRoute(route:string){
      return this.router.url===route;
    }

}


