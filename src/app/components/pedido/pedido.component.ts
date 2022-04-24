import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  montoAPagar: string = ''
  radioMarcado1: boolean = false;
  radioMarcado2: boolean = false;

  submitted = false;

  minDate=new Date().toISOString().split('T')[0];

  constructor() { }

  ngOnInit(): void {
  }

  submit(f: NgForm) {
    debugger;
    
    console.log('hola');
    console.log(f)
  }

  cambiarEstadoR1() {

    this.radioMarcado1 = true;
    this.radioMarcado2 = false;

  }

  cambiarEstadoR2() {

    this.radioMarcado1 = false;
    this.radioMarcado2 = true;

  }


}
