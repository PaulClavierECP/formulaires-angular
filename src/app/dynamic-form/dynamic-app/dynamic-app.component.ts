import { Component } from '@angular/core';

import { ModelService } from '../model.service';
import { ModelBase } from '../components/base.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dynamic-app',
  templateUrl: './dynamic-app.component.html',
  providers: [ModelService],
})
export class DynamicAppComponent {
  models$: Observable<ModelBase<any>[]>;
  help = false;
  showCode1 = false;
  showCode2 = false;
  showCode3 = false;
  showCode4 = false;

  constructor(service: ModelService) {
    this.models$ = service.getModels();
  }
}
