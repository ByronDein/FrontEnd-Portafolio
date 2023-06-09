import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//librerias de formulario
import {  FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
//se importan las librerias del alert y el cliente donde se solicita los datos
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
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
<<<<<<< HEAD
  transporteReg: boolean = false;
=======
  checkbox1 = false;
  checkbox2 = true;
  onClickCheckbox1() {
    if(this.checkbox2 = false){
    this.checkbox1 = true;
    }
    else
    this.checkbox1 = false;
  }
  onClickCheckbox2() {
    if(this.checkbox1 = false){
      this.checkbox2 = true;
    }
  }
>>>>>>> c321230f924e535e19615842903f2a8302512c7b
  //se le coloca los campos a los formularios con la validación de no tener campos vacios
  //inicializa los imports
  constructor(public fb: FormBuilder,private router: Router, private http: HttpClient, private alertController: AlertController) { 
    this.formularioRegistroC = this.fb.group({
      'nombre' : new FormControl("", Validators.required),
      'password' : new FormControl ("", Validators.required),
      'correo' : new FormControl ("", Validators.required),
      'fecha' : new FormControl ("", Validators.required),
      'direccion' : new FormControl ("", Validators.required),
      'telefono' : new FormControl ("", Validators.required),
      'comunac' : new FormControl ("", Validators.required)
    })
    this.formularioRegistroE = this.fb.group({
      'nombreE' : new FormControl("", Validators.required),
      'passwordE' : new FormControl ("", Validators.required),
<<<<<<< HEAD
      'emailE' : new FormControl ("", Validators.required),
      'fechaE' : new FormControl ("", Validators.required),
      'direccionE' : new FormControl ("", Validators.required),
      'telefonoE' : new FormControl ("", Validators.required),
      'comunaE' : new FormControl ("", Validators.required),
      'Objetos' : new FormControl ("", Validators.required),
      'transporte' : new FormControl ("", Validators.required)
=======
      'correoE' : new FormControl ("", Validators.required),
      'fechaE' : new FormControl ("", Validators.required),
      'direccionE' : new FormControl ("", Validators.required),
      'telefonoE' : new FormControl ("", Validators.required)
>>>>>>> c321230f924e535e19615842903f2a8302512c7b
    })

  }
  //se crea la funcion registrar para enviar los datos a la base de datos
  async registrar() {
    const api = 'http://localhost:3000/usuarios';
    const usuarios = {
<<<<<<< HEAD
      nombre: this.formularioRegistroC.value.nombre,
      contrasenia: this.formularioRegistroC.value.password,
      correo: this.formularioRegistroC.value.correo,
      foto: 'asdas.jpg',
      direccion: this.formularioRegistroC.value.direccion,
      telefono: this.formularioRegistroC.value.telefono,
      comuna: this.formularioRegistroC.value.comunac,
      fechaNacimiento: this.formularioRegistroC.value.fecha,

    };
    try {
      console.log(usuarios);
      const response = await this.http.post(api, usuarios).toPromise();
=======
      nombre: 'nombre',
      contrasenia: 'password',
      correo: 'correo',
      foto: 'asdas.jpg',
      direccion: 'direccion',
      telefono: 'telefono',
      comuna: 'comunac',
      fecha_nacimiento:'fecha',

    };
    try {
      const response = await this.http.post(api, usuarios);
>>>>>>> c321230f924e535e19615842903f2a8302512c7b
      console.log(response);
      const alert = await this.alertController.create({
        header: 'Registro exitoso',
        message: 'El usuario ha sido registrado exitosamente.',
        buttons: ['OK'],
      });
      await alert.present();
      this.router.navigate(['/home'])
    } catch (error) {
      console.log(error);
      const alert = await this.alertController.create({
        header: 'Error al registrar',
        message: 'Ha ocurrido un error al registrar el usuario.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
<<<<<<< HEAD

  //Funcion registrar usuario empresa
  async registrarE() {
    const api = 'http://localhost:3000/usuariosEmp';
    if(this.formularioRegistroE.value.transporte == "Si"){
      this.transporteReg = true;
    }
    else{
      this.transporteReg = false;
    }
    const usuarios = {
      nombre: this.formularioRegistroE.value.nombreE,
      contrasenia: this.formularioRegistroE.value.passwordE,
      correo: this.formularioRegistroE.value.emailE,
      foto: 'asdas.jpg',
      direccion: this.formularioRegistroE.value.direccionE,
      telefono: this.formularioRegistroE.value.telefonoE,
      comuna: this.formularioRegistroE.value.comunaE,
      transporte: this.transporteReg,
      objReciclaje: this.formularioRegistroE.value.Objetos,
    };
    try {
      console.log(usuarios);
=======
  async registrarE() {
    const api = 'http://localhost:3000/usuarios';
    const usuarios = {
      nombre: '',
      contrasenia: '',
      correo: '',
      direccion: '',
      tranporte:'',
      objetoreciclaje:'',
    };
    try {
>>>>>>> c321230f924e535e19615842903f2a8302512c7b
      const response = await this.http.post(api, usuarios).toPromise();
      console.log(response);
      const alert = await this.alertController.create({
        header: 'Registro exitoso',
        message: 'El usuario ha sido registrado exitosamente.',
        buttons: ['OK'],
      });
      await alert.present();
      this.router.navigate(['/home'])
    } catch (error) {
      console.log(error);
      const alert = await this.alertController.create({
        header: 'Error al registrar',
        message: 'Ha ocurrido un error al registrar el usuario.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
<<<<<<< HEAD

=======
  


  //se obtienen los datos del usuario
  async obtenerUsuarios() {
    const api = 'http://localhost:3000/usuarios';
    try {
      const response = await this.http.get(api).toPromise();
      console.log(response);
      } catch (error) {
      console.log(error);
    }
  }
>>>>>>> c321230f924e535e19615842903f2a8302512c7b
  ngOnInit() {
  }

}
