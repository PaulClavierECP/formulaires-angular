import { Component, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true,
    },
  ],
})

//Let’s say you need to make a component A that wraps a native form
//element and you want to be able to apply formControl and formControlName
//directly on component A as if it were applied directly on the native form element.
export class FormInputComponent implements ControlValueAccessor {
  //email input

  public emailControl: FormControl;
  public disabled: boolean;

  constructor() {
    this.emailControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  }

  // This method is called by the forms API to write to the view when programmatic changes from model to view are requested.
  writeValue(obj: any): void {
    this.emailControl.setValue(obj);
  }

  // callback functions to register on UI change/touch
  public propagateChange: any = () => {};
  public propagateTouched: any = () => {};

  // This method is called by the forms API on initialization to update the form model when values propagate from the view to the model.
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
