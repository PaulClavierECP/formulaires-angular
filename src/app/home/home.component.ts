import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  steps = [
    { key: '1-reactive', value: '1. Créer un reactive form' },
    { key: '2-dynamic', value: '2. Créer un dynamic form' },
    { key: 'detail-control', value: 'Detail. Créer un formControl' },
    { key: 'detail-group', value: 'Detail. Créer un formGroup' },
    { key: 'detail-array', value: 'Detail. Créer un formArray' },

    { key: 'bonus-composant', value: 'Bonus. Créer un composant' },
    {
      key: 'bonus-template',
      value: 'Bonus. Créer un formulaire template-driven',
    },
  ];

  page = new FormControl('');

  onClick() {
    console.log(this.page.value);
    this.router.navigate(['/', this.page.value]);
  }
}
