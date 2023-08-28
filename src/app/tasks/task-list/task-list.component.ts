import { Component } from '@angular/core';
import { Status, Task } from '../model/task';
import { CRUDTaskListServiceService } from 'src/app/crudtask-list-service.service';
import { ByStatutTaskListServiceService } from 'src/app/by-statut-task-list-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  taskList: Task[];
  archivedTaskList: Task[] = [];
  constructor(
    private taskListService: CRUDTaskListServiceService, 
    private archivedTaskListService: ByStatutTaskListServiceService	
    ) {
    this.taskList = taskListService.getTaskList();
    this.archivedTaskList = archivedTaskListService.getTaskListByStatut(Status.TERMINEE);
  }
}
