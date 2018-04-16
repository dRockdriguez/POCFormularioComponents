import { Component,  Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cinput',
  templateUrl: './cinput.component.html',
  styleUrls: ['./cinput.component.css']
})
export class CinputComponent {

  @Input() cPlaceholder: string;
  @Input() cLabel: string;
  @Input() cFormControlname: string;
  @Input() cFormGroup: FormGroup;
  @Input() cFormControl: FormControl;
  /*@Output() cError: EventEmitter<any> = new EventEmitter();*/

  constructor() {
    console.log('Componente input creado');
    console.log(this.cPlaceholder);
  }

}
