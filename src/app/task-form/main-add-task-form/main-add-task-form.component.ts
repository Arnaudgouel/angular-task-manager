import { Component } from '@angular/core';
import { CRUDTaskListService } from 'src/app/crudtask-list-service.service';
import { Status } from 'src/app/tasks/model/task';

@Component({
  selector: 'app-main-add-task-form',
  templateUrl: './main-add-task-form.component.html',
  styleUrls: ['./main-add-task-form.component.css']
})
export class MainAddTaskFormComponent {
 status: string[];

 constructor(
  private crudTaskListService: CRUDTaskListService,
 ) {
    this.status = Object.values(Status);
  }

  handleSubmit(task: any) {
    this.crudTaskListService.addToTaskList(task);
  }

}
