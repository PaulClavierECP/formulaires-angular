import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
  FormArray,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';

const getValidationErrors: ValidatorFn = (control: AbstractControl) => {
  const values = control.get('actionnaires').value;
  const shares = values.map((actionnaire) => actionnaire.action);
  const shareTotal = shares.reduce((sum, el) => sum + el, 0);
  if (shareTotal === 100) {
    return null;
  } else {
    return { sumOfShares: 'NotHundred' };
  }
};

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss'],
})
export class FormReactiveComponent implements OnInit {
  help = false;
  showCode1 = false;
  showCode2 = false;
  showCode3 = false;
  showCode4 = false;
  showCode5 = false;
  showCode6 = false;
  showCode7 = false;

  inscription: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.inscription = this.fb.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        fillGender: [false],
        gender: [{ value: null, disabled: true }],
        actionnaires: this.fb.array([
          this.fb.group({
            action: [0],
          }),
        ]),
      },
      { validators: [getValidationErrors] }
    );
  }

  get actionnaires() {
    return this.inscription.controls.actionnaires as FormArray;
  }

  ngOnInit(): void {
    let gender = this.inscription.get('gender');
    this.inscription.controls.fillGender.valueChanges.subscribe((data) => {
      if (data && gender) {
        gender.enable();
      } else {
        gender.disable();
      }
    });
  }

  updateName() {
    this.inscription.controls.firstname.setValue('Batman');
  }

  addActionnaire() {
    this.actionnaires.push(
      this.fb.group({
        action: [0],
      })
    );
  }

  deleteActionnaire(id: number) {
    this.actionnaires.removeAt(id);
  }

  onClick() {
    this.router.navigate(['/home']);
  }
}
