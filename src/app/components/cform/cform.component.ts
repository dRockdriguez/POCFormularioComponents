import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { CinputComponent } from '../cinput/cinput.component';
import { CcomboComponent } from '../ccombo/ccombo.component';

import { CInputObj } from '../../ObjetoCInput';

@Component({
  selector: 'app-cform',
  templateUrl: './cform.component.html',
  styleUrls: ['./cform.component.css']
})
export class CformComponent {

  forma: FormGroup;
  inputsArr: CInputObj[] = [];
  inputsArr1: CInputObj[] = [];

  mostrarErrores: boolean = false;

  constructor() {


    this.inputsArr.push( new CInputObj('Nombre completo...', 'NOMBRE:', 'nombre',
          this.forma, null, 'cInput', 'nombre'));
    this.inputsArr.push( new CInputObj('Apellidos', 'APELLIDOS:', 'apellidos',
          this.forma, null, 'cInput', 'apellidos'));
    this.inputsArr.push( new CInputObj('Direccion', 'DIRECCION:', 'direccion',
          this.forma, null, 'cInput', 'direccion'));
    this.inputsArr.push( new CInputObj('País', 'PAIS:', 'pais',
          this.forma, null, 'cCombo', 'pais'));

    this.inputsArr1.push( new CInputObj('Nombre completo...', 'NOMBRE:', 'nombre1',
          this.forma, null, 'cInput', 'nombre1'));
    this.inputsArr1.push( new CInputObj('Apellidos', 'APELLIDOS:', 'apellidos1',
          this.forma, null, 'cInput', 'apellidos1'));
    this.inputsArr1.push( new CInputObj('Direccion', 'DIRECCION:', 'direccion1',
          this.forma, null, 'cInput', 'direccion1'));
    this.inputsArr1.push( new CInputObj('País', 'PAIS:', 'pais1',
          this.forma, null, 'cCombo', 'pais1'));

    this.forma = this.toFormGroup(this.inputsArr,  this.inputsArr1);
    console.log(this.forma);
   }

  toFormGroup(campos: CInputObj[], campos1: CInputObj[] ) {
    const group: any = {};
    campos.forEach(campo => {
      if (campo.cType === 'cInput') {
        group[campo.cName] = new FormControl('', [Validators.required, Validators.minLength(5)]);
      } else {
        group[campo.cName] = new FormControl('', Validators.required);
      }
    });

    campos1.forEach(campo => {
      if (campo.cType === 'cInput') {
        group[campo.cName] = new FormControl('', [Validators.required, Validators.minLength(5)]);
      } else {
        group[campo.cName] = new FormControl('', Validators.required);
      }
    });

    return new FormGroup(group);
  }

  submit() {
    this.mostrarErrores = true;
    console.log(this.forma);
  }
}
