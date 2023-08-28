import { Task, Status } from './task';

export class TaskList {
  tasks: Task[];
  constructor() {
    this.tasks = TASKS;
  }
}

const TASKS = [
  new Task("Tâche 1", "Ma description", Status.A_FAIRE),
  new Task("Tâche 2", "Ma description", Status.EN_COURS),
  new Task("Tâche 3", "Ma description", Status.TERMINEE),
  new Task("Tâche 4", "Ma description", Status.A_FAIRE),
  new Task("Tâche 5", "Ma description", Status.EN_COURS),
  new Task("Tâche 6", "Ma description", Status.TERMINEE),
  new Task("Tâche 7", "Ma description", Status.A_FAIRE),
  new Task("Tâche 8", "Ma description", Status.EN_COURS),
  new Task("Tâche 9", "Ma description", Status.TERMINEE), 
]