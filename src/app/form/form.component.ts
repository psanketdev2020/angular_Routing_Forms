import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  reactiveForm: FormGroup;
  notAllowedName = ['sanket', 'test'];
  gendersArr = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' },
  ];
  constructor() {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      uname: new FormControl(null, [
        Validators.required,
        this.NotAllowedUserName.bind(this),
      ]),
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        this.notAllowedEmail
      ),
      course: new FormControl('Angular'),
      gender: new FormControl('Male'),
      skills: new FormArray([new FormControl(null, Validators.required)]),
    });
  }

  addSkills() {
    (this.reactiveForm.get('skills') as FormArray).push(new FormControl(null, Validators.required));
  }

  NotAllowedUserName(control: FormControl) {
    if (this.notAllowedName.indexOf(control.value) !== -1) {
      return { nameNotAllowed: true };
    }
    return null;
  }

  notAllowedEmail(control: FormControl): Promise<any> | Observable<any> {
    const emailResponse = new Promise<any>((res, rej) => {
      setTimeout(() => {
        if (control.value === 'sanketp@techved.com') {
          res({emailNotAllowed: true})
        } else {
          res(null)
        }
      }, 3000);
    })
    return emailResponse;
  }

  submitForm() {
    console.log(this.reactiveForm)
  }
}
