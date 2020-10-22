import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent {
  constructor(private router: Router) {}
  errorMessage: string | null = null;
  email = new FormControl('', [Validators.required, Validators.email]);
  showCode = false;

  updateEmail() {
    this.email.setValue('paulc@sipios.com');
  }

  onClick() {
    if (this.email.errors?.required) {
      this.errorMessage = 'Mais enfin écrivez cet email !';
    } else if (this.email.errors?.email) {
      this.errorMessage = "Je vous ai dit d' entrer un mail ...";
    } else {
      this.errorMessage = null;
      this.router.navigate(['/home']);
    }
  }
}
