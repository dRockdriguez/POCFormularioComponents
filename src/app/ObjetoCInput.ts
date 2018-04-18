import { FormControl, FormGroup } from '@angular/forms';

export class CInputObj {
    cPlaceholder: string;
    cLabel: string;
    cFormControlname: string;
    cFormGroup: FormGroup;
    cFormControl: FormControl;
    cType: string;
    cName: string;

   constructor(
    placeholder: string,
    label?: string,
    formControlName?: string,
    formGroup?: FormGroup,
    formControl?: FormControl,
    type?: string,
    name?: string
  ) {
    this.cPlaceholder = placeholder;
    this.cLabel = label;
    this.cFormControl = formControl;
    this.cFormControlname = formControlName;
    this.cFormGroup = formGroup;
    this.cType = type;
    this.cName = name;
  }
}