import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import{RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ButtonComponent } from './component/button/button.component';
import { HeaderComponent } from './component/header/header.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { TaskItemComponent } from './component/task-item/task-item.component';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { AboutComponent } from './component/about/about.component';
import { FooterComponent } from './component/footer/footer.component';

const appRoutes: Routes = [  // this is an array with objects {} with a path
  {path:'',component:TasksComponent},  // first parameter is the homepage empty string index
  // component:TasksComponent which has the add form and the list of tasks
  {path:'about',component:AboutComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule, FormsModule,RouterModule.forRoot(appRoutes,{enableTracing:true}) // debug your routes
    // by enable tracing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
