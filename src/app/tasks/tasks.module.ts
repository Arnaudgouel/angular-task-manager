import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { MainTaskComponent } from './main-task/main-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksRoutingModule } from './tasks-routing.module';



@NgModule({
  declarations: [
    TaskComponent,
    MainTaskComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ],
  exports: [
    TaskComponent,
    MainTaskComponent,
    TaskListComponent
  ],
  bootstrap: [TaskListComponent]
})
export class TasksModule { }
