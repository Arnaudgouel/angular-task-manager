import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainAddTaskFormComponent } from './main-add-task-form/main-add-task-form.component';
import { ErrorMinLengthFieldFormComponent } from '../error-min-length-field-form/error-min-length-field-form.component';
import { ErrorMaxLengthFieldFormComponent } from '../error-max-length-field-form/error-max-length-field-form.component';



@NgModule({
  declarations: [
    AddTaskFormComponent,
    MainAddTaskFormComponent,
    ErrorMinLengthFieldFormComponent,
    ErrorMaxLengthFieldFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AddTaskFormComponent,
    MainAddTaskFormComponent,
    ErrorMinLengthFieldFormComponent,
    ErrorMaxLengthFieldFormComponent
  ]
})
export class AddTaskFormModule { }
