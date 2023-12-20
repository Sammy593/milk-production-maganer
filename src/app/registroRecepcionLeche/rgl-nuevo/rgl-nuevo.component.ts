import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rgl-nuevo',
  templateUrl: './rgl-nuevo.component.html',
  styleUrls: ['./rgl-nuevo.component.scss']
})
export class RglNuevoComponent {

  form:FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.buildForm();
  }
  ngOnInit(): void {}
  private buildForm(){
    this.form = this.formBuilder.group({
      id_productor: new FormControl('', [Validators.required]),
      codigo_registro: new FormControl('', [Validators.required]),
      fecha_hora_recepcion: new FormControl('', [Validators.required]),
      cantidad_leche_recibida: new FormControl('', [Validators.required]),
      estado_leche: new FormControl('', [Validators.required]),
      temperatura_leche: new FormControl('', [Validators.required]),
      nivel_grasa: new FormControl('', [Validators.required]),
      observaciones: new FormControl('', [Validators.required]),
    });
  }
  save(event:Event){
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      console.log(value);
    }else{
      this.form.markAllAsTouched();
      console.log("Error");
    }
  }

}
