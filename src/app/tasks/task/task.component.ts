import { Component, Input } from '@angular/core';
import { Task, Status } from '../model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: any;

  color: Record<string, string> = {};

  ngOnInit() {
    this.setColor();
  }

  setColor() {
    switch (this.task.status) {
      case Status.A_FAIRE:
        this.color = {"color": "red"};
        break;
      case Status.EN_COURS:
        this.color = {"color": "blue"};
        break;
      case Status.TERMINEE:
        this.color = {"color": "green"};
        break;
    }
  }
}
