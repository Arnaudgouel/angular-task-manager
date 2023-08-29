import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Status } from '../../tasks/model/task';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent {
  @Input() status: any;
  @Output() handleSubmit = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { 
  }

  form = this.fb.group({
    titre: [
      "", {
      validators: [Validators.required, Validators.minLength(3), Validators.maxLength(30)]
    }],
    description: [
      "", {
      validators: [Validators.minLength(3), Validators.maxLength(30)]
    }],
    status: [""]
  });

  onSubmit() {
    this.handleSubmit.emit(this.form.value);
  }
}
