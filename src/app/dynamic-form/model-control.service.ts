import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ModelBase } from './components/base.model';

@Injectable()
export class ModelControlService {
  constructor() {}

  //Convert Questions listed to FormGroup
  toFormGroup(models: ModelBase<string>[]) {
    const group: any = {};

    models.forEach((model) => {
      group[model.name] = model.required
        ? new FormControl(model.value || '', Validators.required)
        : new FormControl(model.value || '');
    });
    return new FormGroup(group);
  }
}
