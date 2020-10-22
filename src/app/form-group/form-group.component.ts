import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent implements OnInit {
  showCode = false;
  inscription: FormGroup;
  errorMessage: string | null = null;
  genderChoices = [
    { name: 'female', label: 'Femme' },
    { name: 'male', label: 'Homme' },
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.inscription = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      fillGender: [false],
      gender: [{ value: null, disabled: true }],
    });
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
  onClick() {
    this.router.navigate(['/home']);
  }
}
