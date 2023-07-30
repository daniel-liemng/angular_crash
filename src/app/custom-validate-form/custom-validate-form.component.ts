import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { noSpace } from '../validators/nospace.validator';

@Component({
  selector: 'app-custom-validate-form',
  templateUrl: './custom-validate-form.component.html',
  styleUrls: ['./custom-validate-form.component.scss'],
})
export class CustomValidateFormComponent {
  form: any;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          noSpace.noSpaceValidation,
        ],
      ],
      password: ['', Validators.required],
    });
  }

  get fc() {
    return this.form.controls;
  }
}
