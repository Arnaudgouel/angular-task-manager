import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-min-length-field-form',
  templateUrl: './error-min-length-field-form.component.html',
  styleUrls: ['./error-min-length-field-form.component.css']
})
export class ErrorMinLengthFieldFormComponent {
  @Input() input: any;
  @Input() name: string | undefined;

}
