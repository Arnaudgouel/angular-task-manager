import { Injectable } from '@angular/core';
import { Task } from './tasks/model/task';
import { TaskList } from './tasks/model/TaskList';
import { CRUDTaskListServiceInterface } from './crudtask-list-interface.service';

@Injectable({
  providedIn: 'root'
})
export class CRUDTaskListService implements CRUDTaskListServiceInterface {

  tasks: Task[] = new TaskList().tasks;

  constructor() { }

  getTaskList() {
    return this.tasks;
  }
}
