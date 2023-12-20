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
      nombre: new FormControl('',[Validators.required]),
      cedula: new FormControl('',[Validators.required]),
      direccion: new FormControl('',[Validators.required]),
      contacto: new FormControl('',[Validators.required]),
      tipo_leche: new FormControl('',[Validators.required])
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
