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
    { name: '1-reactive', label: '1. Créer un reactive form' },
    { name: '2-dynamic', label: '2. Créer un dynamic form' },
    { name: 'detail-control', label: 'Detail. Créer un formControl' },
    { name: 'detail-group', label: 'Detail. Créer un formGroup' },
    { name: 'detail-array', label: 'Detail. Créer un formArray' },

    { name: 'bonus-composant', label: 'Bonus. Créer un composant' },
    {
      name: 'bonus-template',
      label: 'Bonus. Créer un formulaire template-driven',
    },
  ];

  page = new FormControl('');

  onClick() {
    this.router.navigate(['/', this.page.value]);
  }
}
