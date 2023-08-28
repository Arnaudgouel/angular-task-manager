import { Injectable } from '@angular/core';
import { CRUDTaskListServiceService } from './crudtask-list-service.service';
import { ByStatutTaskListServiceInterface } from './by-statut-task-list-interface.service copy';

@Injectable({
  providedIn: 'root'
})
export class ByStatutTaskListServiceService extends CRUDTaskListServiceService implements ByStatutTaskListServiceInterface {

  constructor() {
    super();
  }

  getTaskListByStatut(status: string) {
    return this.getTaskList().filter(task => task.status === status);
  }
}
