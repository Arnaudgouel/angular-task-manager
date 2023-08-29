import { Observable } from 'rxjs';
import { CRUDTaskListServiceInterface } from './crudtask-list-interface.service';
import { Status, Task } from './tasks/model/task';


export interface ByStatutTaskListServiceInterface extends CRUDTaskListServiceInterface {

  getTaskListByStatut(status: Status): Observable<Task[]>;
}
