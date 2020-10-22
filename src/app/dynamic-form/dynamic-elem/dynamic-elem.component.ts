import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ModelBase } from '../components/base.model';

@Component({
  selector: 'app-dynamic-elem',
  templateUrl: './dynamic-elem.component.html',
})
export class DynamicElemComponent {
  @Input() model: ModelBase<string>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.model.name].valid;
  }
}
