import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './tasks/task-list/task-list.component';

const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: '', redirectTo: '/display', pathMatch: 'full' },
  { path: '/display', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }