import { Injectable } from '@angular/core';
import { Task } from './tasks/model/task';
import { TaskList } from './tasks/model/TaskList';

@Injectable({
  providedIn: 'root'
})
export class CRUDTaskListServiceService {

  tasks: Task[] = new TaskList().tasks;

  constructor() { }

  getTaskList() {
    return this.tasks;
  }
}
