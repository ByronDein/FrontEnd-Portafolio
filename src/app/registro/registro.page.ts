import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {
  //se crea la variable select tabs
  selectTabs = 'recent';
  //Funcion checkbox
  checkbox1 = false;
  checkbox2 = false;
  onClickCheckbox1() {
    this.checkbox2 = false;
  }

  onClickCheckbox2() {
    this.checkbox1 = false;
  }
  constructor() { 

  }
  
  
  ngOnInit() {
  }

}
