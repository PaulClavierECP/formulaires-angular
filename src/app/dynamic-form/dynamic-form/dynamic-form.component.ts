import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ModelBase } from '../components/base.model';
import { ModelControlService } from '../model-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ModelControlService],
})
export class DynamicFormComponent implements OnInit {
  @Input() models: ModelBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private mcs: ModelControlService) {}

  ngOnInit() {
    this.form = this.mcs.toFormGroup(this.models);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
