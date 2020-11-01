import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControlComponent } from './form-control/form-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { DynamicAppComponent } from './dynamic-form/dynamic-app/dynamic-app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form/dynamic-form.component';
import { DynamicElemComponent } from './dynamic-form/dynamic-elem/dynamic-elem.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    HomeComponent,
    FormGroupComponent,
    FormArrayComponent,
    FormInputComponent,
    FormTemplateComponent,
    FormReactiveComponent,
    DynamicAppComponent,
    DynamicFormComponent,
    DynamicElemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
