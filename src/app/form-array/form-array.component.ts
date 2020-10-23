import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormArray,
  ValidatorFn,
  AbstractControl,
  FormGroup,
} from '@angular/forms';

const getValidationErrors: ValidatorFn = (control: AbstractControl) => {
  const values = control.get('actionnaires').value;
  const shares = values.map((actionnaire) => actionnaire.share);
  const shareTotal = shares.reduce((sum, el) => sum + el, 0);
  if (shareTotal === 100) {
    return null;
  } else {
    return { sumOfShares: 'NotHundred' };
  }
};

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent {
  showCode = false;

  formulaire: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.formulaire = this.fb.group(
      {
        actionnaires: this.fb.array([
          this.fb.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            share: [
              0,
              [
                Validators.required,
                Validators.pattern('([0-9]*?)'),
                Validators.min(0),
                Validators.max(100),
              ],
            ],
          }),
        ]),
      },
      { validators: [getValidationErrors] }
    );
  }

  get actionnaires() {
    return this.formulaire.controls.actionnaires as FormArray;
  }

  onClick() {
    console.log(this.formulaire);
  }

  addActionnaire() {
    this.actionnaires.push(
      this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        share: [
          0,
          [
            Validators.required,
            Validators.pattern('([0-9]*?)'),
            Validators.min(0),
            Validators.max(100),
          ],
        ],
      })
    );
  }

  deleteActionnaire(id: number) {
    this.actionnaires.removeAt(id);
  }
}
