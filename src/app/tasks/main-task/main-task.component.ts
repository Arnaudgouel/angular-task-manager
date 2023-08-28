import { Component } from '@angular/core';
import { Task, Status } from '../model/task';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css']
})
export class MainTaskComponent {
  task: Task;
  constructor() {
    this.task = new Task("Ma tâche", "Ma description", Status.A_FAIRE);
  }

  ngOnInit() {
    this.task = new Task("Ma tâche", "Ma description", Status.A_FAIRE);
  }
}
