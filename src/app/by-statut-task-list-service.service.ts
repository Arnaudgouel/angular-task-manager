import { Injectable } from '@angular/core';
import { CRUDTaskListService } from './crudtask-list-service.service';
import { ByStatutTaskListServiceInterface } from './by-statut-task-list-interface.service';
import { Status, Task } from './tasks/model/task';
import { Observable, of } from 'rxjs';
import { TaskList } from './tasks/model/TaskList';

@Injectable({
  providedIn: 'root'
})
export class ByStatutTaskListService extends CRUDTaskListService implements ByStatutTaskListServiceInterface {

  constructor() {
    super();
  }

  getTaskListByStatut(status: Status): Observable<Task[]> {
    return of(TaskList.tasks.filter(task => task.status === status));
  }
}
