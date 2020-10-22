import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss'],
})
export class FormTemplateComponent {
  constructor(private router: Router) {}
  firstname = '';
  onSubmit() {
    this.router.navigate(['/home']);
  }
}
