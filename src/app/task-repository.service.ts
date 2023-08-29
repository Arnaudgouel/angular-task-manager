import { Injectable } from '@angular/core';
import { CRUDTaskListService } from './crudtask-list-service.service';
import { ByStatutTaskListService } from './by-statut-task-list-service.service';
import { Status } from './tasks/model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskRepositoryService {

  constructor(
    private crudTaskListService: CRUDTaskListService,
    private byStatusTaskListService: ByStatutTaskListService
  ) { }

  getTasks(status: Status|null = null) {
    if (status) {
      return this.byStatusTaskListService.getTaskListByStatut(status);
    }
    return this.crudTaskListService.getTaskList();
  }
}
