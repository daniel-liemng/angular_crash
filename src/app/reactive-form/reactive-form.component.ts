import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  form: any;
  emailRegex: string =
    '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$';
  contactNoRegex: string = '[789][0-9]{9}';

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      fname: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      contactDetails: fb.group({
        address: ['', [Validators.required]],
        shippingAddress: ['', [Validators.required]],
        contactNo: [
          '',
          [Validators.required, Validators.pattern(this.contactNoRegex)],
        ],
      }),
      skills: fb.array([]),
    });

    // this.form = new FormGroup({
    //   fname: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(5),
    //   ]),
    //   email: new FormControl('', [
    //     Validators.required,
    //     Validators.email,
    //     // Validators.pattern(this.emailRegex),
    //   ]),

    //   contactDetails: new FormGroup({
    //     address: new FormControl('', [Validators.required]),
    //     shippingAddress: new FormControl('', [Validators.required]),
    //     contactNo: new FormControl('', [
    //       Validators.required,
    //       Validators.pattern(this.contactNoRegex),
    //     ]),
    //   }),

    //   skills: new FormArray([]),
    // });
  }

  get fname() {
    return this.form.get('fname');
  }

  get email() {
    return this.form.get('email');
  }

  get address() {
    return this.form.get('contactDetails.address');
  }

  get shippingAddress() {
    return this.form.get('contactDetails.shippingAddress');
  }

  get contactNo() {
    return this.form.get('contactDetails.contactNo');
  }

  get Skills() {
    return this.form.get('skills') as FormArray;
  }

  addSkills(skill: HTMLInputElement) {
    // (this.form.get('skills') as FormArray).push(new FormControl(skill.value));

    this.Skills.push(new FormControl(skill.value));
    skill.value = '';
  }

  removeSkills(index: any) {
    this.Skills.removeAt(index);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
