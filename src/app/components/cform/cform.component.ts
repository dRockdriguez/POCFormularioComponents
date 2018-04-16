import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { CinputComponent } from '../cinput/cinput.component';

@Component({
  selector: 'app-cform',
  templateUrl: './cform.component.html',
  styleUrls: ['./cform.component.css']
})
export class CformComponent implements OnInit {

  forma: FormGroup;
  
  constructor() {
    this.forma = new FormGroup(
      {
          'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      }
    );
   }

  ngOnInit() {
  }


  submit() {
    console.log(this.forma.value);
  }
}
