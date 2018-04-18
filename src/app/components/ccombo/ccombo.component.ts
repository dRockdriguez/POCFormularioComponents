import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ccombo',
  templateUrl: './ccombo.component.html',
  styleUrls: ['./ccombo.component.css']
})
export class CcomboComponent {

  @Input() cLabel: string;
  @Input() cFormControlname: string;
  @Input() cFormGroup: FormGroup;
  @Input() cFormControl: FormControl;
  @Input() cType: string;
  constructor() { }

}
