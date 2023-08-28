import { CRUDTaskListServiceInterface } from './crudtask-list-interface.service copy';
import { Task } from './tasks/model/task';


export interface ByStatutTaskListServiceInterface extends CRUDTaskListServiceInterface {

  getTaskListByStatut(status: string): Task[];
}
