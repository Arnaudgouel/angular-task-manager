import { Observable } from 'rxjs';
import { Task } from './tasks/model/task';


export interface CRUDTaskListServiceInterface {

  tasks: Observable<Task[]>;

  getTaskList(): Observable<Task[]>;
}
