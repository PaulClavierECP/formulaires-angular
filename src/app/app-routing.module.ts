import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormControlComponent } from './form-control/form-control.component';
import { HomeComponent } from './home/home.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormTemplateComponent } from './form-template/form-template.component';

import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { DynamicAppComponent } from './dynamic-form/dynamic-app/dynamic-app.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'detail-control',
    component: FormControlComponent,
  },
  {
    path: 'detail-group',
    component: FormGroupComponent,
  },
  {
    path: 'detail-array',
    component: FormArrayComponent,
  },
  {
    path: '2-dynamic',
    component: DynamicAppComponent,
  },
  {
    path: '1-reactive',
    component: FormReactiveComponent,
  },
  {
    path: 'bonus-composant',
    component: FormInputComponent,
  },
  {
    path: 'bonus-template',
    component: FormTemplateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
