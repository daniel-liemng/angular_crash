import { Component } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  onSubmit(f: NgForm) {
    console.log(f.value);
  }

  getValue(f: any) {
    console.log(f);
  }
}
