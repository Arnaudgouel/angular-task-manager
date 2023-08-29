import { CRUDTaskListServiceInterface } from './crudtask-list-interface.service';
import { Task } from './tasks/model/task';


export interface ByStatutTaskListServiceInterface extends CRUDTaskListServiceInterface {

  getTaskListByStatut(status: string): Task[];
}
