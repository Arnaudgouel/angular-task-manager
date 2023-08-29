import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-max-length-field-form',
  templateUrl: './error-max-length-field-form.component.html',
  styleUrls: ['./error-max-length-field-form.component.css']
})
export class ErrorMaxLengthFieldFormComponent {
  @Input() input: any;
  @Input() name: string | undefined;
}
