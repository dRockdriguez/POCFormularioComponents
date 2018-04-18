import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  @Input() forma: FormGroup;
  @Input() mostrarErrores: boolean;
  keysForm: string[] = [];

  constructor() { }

  ngOnInit() {
    Object.keys(this.forma.controls).forEach(key => {
      this.keysForm.push(key);
      /*const errores: ValidationErrors = this.forma.get(key).errors;
      if (errores != null) {
            Object.keys(errores).forEach(keyError => {
              console.log('Key: ' + key + ', keyError: ' + keyError + ', err value: ', errores[keyError]);
            });
          }
        });
      }*/
    });
  }

}
