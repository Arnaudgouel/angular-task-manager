import { Task } from './tasks/model/task';


export interface CRUDTaskListServiceInterface {

  tasks: Task[];

  getTaskList(): Task[];
}
