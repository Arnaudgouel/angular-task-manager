import { Injectable } from '@angular/core';
import { CRUDTaskListService } from './crudtask-list-service.service';
import { ByStatutTaskListServiceInterface } from './by-statut-task-list-interface.service';

@Injectable({
  providedIn: 'root'
})
export class ByStatutTaskListService extends CRUDTaskListService implements ByStatutTaskListServiceInterface {

  constructor() {
    super();
  }

  getTaskListByStatut(status: string) {
    return this.getTaskList().filter(task => task.status === status);
  }
}
