import { Component } from '@angular/core';
import { Status, Task } from '../model/task';
import { TaskRepositoryService } from 'src/app/task-repository.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  taskList: Task[] = [];
  archivedTaskList: Task[] = [];
  constructor(
    private taskRepositoryService: TaskRepositoryService,
    ) {
    taskRepositoryService.getTasks().subscribe(data => this.taskList = data);
    taskRepositoryService.getTasks(Status.TERMINEE).subscribe(data => this.archivedTaskList = data);
  }
}
