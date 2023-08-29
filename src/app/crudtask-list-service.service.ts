import { Injectable } from '@angular/core';
import { Task } from './tasks/model/task';
import { TaskList } from './tasks/model/TaskList';
import { CRUDTaskListServiceInterface } from './crudtask-list-interface.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CRUDTaskListService implements CRUDTaskListServiceInterface {

  tasks: Observable<Task[]>;

  constructor() {
    this.tasks = of(TaskList.tasks);
   }

  getTaskList() {
    return this.tasks;
  }

  addToTaskList(task: any) {
    task = new Task(task.titre, task.description, task.status);
    TaskList.tasks.push(task);
  }
}
