import { Component,  Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cinput',
  templateUrl: './cinput.component.html',
  styleUrls: ['./cinput.component.css']
})
export class CinputComponent implements OnInit{

  @Input() cPlaceholder: string;
  @Input() cLabel: string;
  @Input() cFormControlname: string;
  @Input() cFormGroup: FormGroup;
  @Input() cFormControl: FormControl;
  @Input() cType: string;
  @Input() mostrarErrores: boolean;

  // @Output() cError: EventEmitter<string> = new EventEmitter();

  constructor(
  ) {
    
  }

  ngOnInit(){
  
  }
}
