import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//librerias de formulario
import {  FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {
  //Variables de registro del formulario
  formularioRegistroC: FormGroup;
  formularioRegistroE: FormGroup;
  //se crea la variable select tabs
  selectTabs = 'recent';
  //Funcion checkbox
  checkbox1 = false;
  checkbox2 = false;
  onClickCheckbox1() {
    this.checkbox2 = false;
  }

  onSubmitTemplate(){
    console.log('Form submit c');
  }
  onClickCheckbox2() {
    this.checkbox1 = false;
  }
  //se le coloca los campos a los formularios con la validación de no tener campos vacios
  constructor(public fb: FormBuilder) { 
    this.formularioRegistroC = this.fb.group({
      'nombre' : new FormControl("", Validators.required),
      'password' : new FormControl ("", Validators.required),
      'correo' : new FormControl ("", Validators.required),
      'fecha' : new FormControl ("", Validators.required),
      'direccion' : new FormControl ("", Validators.required),
      'telefono' : new FormControl ("", Validators.required)
    })
    this.formularioRegistroE = this.fb.group({
      'nombreE' : new FormControl("", Validators.required),
      'passwordE' : new FormControl ("", Validators.required),
      'correoE' : new FormControl ("", Validators.required),
      'fechaE' : new FormControl ("", Validators.required),
      'direccionE' : new FormControl ("", Validators.required),
      'telefonoE' : new FormControl ("", Validators.required)
    })

  }
  
  
  ngOnInit() {
  }

}
