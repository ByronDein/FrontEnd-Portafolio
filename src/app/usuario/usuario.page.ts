<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> c321230f924e535e19615842903f2a8302512c7b
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
<<<<<<< HEAD
  nomb: String;
  dire: String;
  comun: string;
  telef: string;
  fecha: string;
  sesion: any;
  sesionC: string = "";
  sesionE: string = "";
  constructor(private router : Router) { 
    this.nomb = JSON.parse(localStorage.getItem('nombre')!);
    this.dire = JSON.parse(localStorage.getItem('direccion')!);
    this.comun = JSON.parse(localStorage.getItem('comuna')!);
    this.telef = JSON.parse(localStorage.getItem('telefono')!);
    this.fecha = JSON.parse(localStorage.getItem('fecha')!);
    const sesion = localStorage.getItem('Tipousuario');    
    if(sesion === "1"){
      this.sesionC = "ok";
    }
    else
    if(sesion === "2"){
      this.sesionE = "ok";
    }

  }
=======

  constructor(private router : Router) { }
>>>>>>> c321230f924e535e19615842903f2a8302512c7b

  cerrar(){
    localStorage.clear();
    this.router.navigate(['/home'])
  }
  ngOnInit() {
<<<<<<< HEAD
    
  }
=======
  }

>>>>>>> c321230f924e535e19615842903f2a8302512c7b
}
