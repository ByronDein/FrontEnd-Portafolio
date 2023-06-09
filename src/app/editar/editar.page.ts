import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
<<<<<<< HEAD
  //variables a editar
  Nombre: any;
  password: any;
  telefono: any;
  direccion: any;
  comunac:any;

  //variables para mostrar el local storage
  nomb: String;
  dire: String;
  comun: string;
  telef: string;
  fecha: string;
  constructor(public fb: FormBuilder,private router: Router, private http: HttpClient, private alertController: AlertController) {
    this.nomb = JSON.parse(localStorage.getItem('nombre')!);
    this.dire = JSON.parse(localStorage.getItem('direccion')!);
    this.comun = JSON.parse(localStorage.getItem('comuna')!);
    this.telef = JSON.parse(localStorage.getItem('telefono')!);
    this.fecha = JSON.parse(localStorage.getItem('fecha')!);
   }
   async actualizar(){
    
   }
=======
  forAct: FormGroup;
  constructor(public fb: FormBuilder,private router: Router, private http: HttpClient, private alertController: AlertController) {
    this.forAct = this.fb.group({
      'nombre' : new FormControl("", Validators.required),
      'password' : new FormControl ("", Validators.required),
      'direccion' : new FormControl ("", Validators.required),
      'telefono' : new FormControl ("", Validators.required),
      'comunac' : new FormControl ("", Validators.required)
    })
   }
   async actualizar(){

   }

>>>>>>> c321230f924e535e19615842903f2a8302512c7b
  ngOnInit() {
  }

}
