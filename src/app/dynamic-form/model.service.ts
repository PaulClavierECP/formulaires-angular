import { Injectable } from '@angular/core';

import { DropdownModel } from './components/dropdown.model';
import { ModelBase } from './components/base.model';
import { TextModel } from './components/text.model';
import { of } from 'rxjs';

@Injectable()
export class ModelService {
  getModels() {
    const models: ModelBase<string>[] = [
      new DropdownModel({
        name: 'skill',
        label: 'What is your skill buddy ?',
        options: [
          { key: 'ng', value: 'Angular' },
          { key: 'reactjs', value: 'React' },
          { key: 'spring', value: 'Springboot' },
          { key: 'kub', value: 'Kubernetes' },
        ],
        order: 3,
      }),

      new TextModel({
        name: 'firstName',
        label: 'First name',
        value: 'Woody',
        required: true,
        order: 1,
      }),

      new TextModel({
        name: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
      }),
    ];

    return of(models.sort((a, b) => a.order - b.order));
  }
}
