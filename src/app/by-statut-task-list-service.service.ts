import { Injectable } from '@angular/core';
import { CRUDTaskListServiceService } from './crudtask-list-service.service';

@Injectable({
  providedIn: 'root'
})
export class ByStatutTaskListServiceService extends CRUDTaskListServiceService {

  constructor() {
    super();
  }

  getTaskListByStatut(status: string) {
    return this.getTaskList().filter(task => task.status === status);
  }
}
