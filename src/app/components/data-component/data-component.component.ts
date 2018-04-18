import { Component, Input, OnInit } from '@angular/core';

import { CInputObj } from '../../ObjetoCInput';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-data-component',
  templateUrl: './data-component.component.html',
  styleUrls: ['./data-component.component.css']
})
export class DataComponentComponent implements OnInit{

  @Input() inputsArr: CInputObj[] = [];
  @Input() titulo: string;
  @Input() cFormGroup: FormGroup;
  @Input() mostrarErrores: boolean;
  constructor() {

   }

   ngOnInit() {
   }

}
