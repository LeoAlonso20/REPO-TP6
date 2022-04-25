import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  montoAPagar: string = '';

  tipoEnvio : string = '';

  radioMarcado1: boolean = false;
  radioMarcado2: boolean = false;

  radioMarcado3: boolean = false;
  radioMarcado4: boolean = false;

  submitted = false;

  minDate=new Date().toISOString().split('T')[0];

  opcionCiudad : any = '';

  domicilio : string = '';

  listaDomicilios : string[] = ['General Paz 25', 'Av. Sabatini 240', 'Colombia 200', 'General Paz 800', 'San Lucas 120', 
                                'Buenos Aires 550', 'Rio Cuarto 45', 'Bv. San Juan 420', 'Lima 20', 'Bartolomé Mitre 600',
                                'Azcuénaga 708', 'Av. Rivadavia 1200'];
  
  listaTipoEnvios : string[] = ['0-500 mts', '501-1000 mts', '1001-1500 mts', '1501-3000 mts', '3001-6000 mts', '6001-12000 mts'];

  listaCostosEnvios : string[] = ['$100.00', '$140.00', '$180.00', '$250.00', '$400.00', '$750.00'];

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

  cambiarEstadoR3() {

    this.radioMarcado3 = true;
    this.radioMarcado4 = false;

  }

  cambiarEstadoR4() {

    this.radioMarcado3 = false;
    this.radioMarcado4 = true;

  }

  cambiarCiudad(ciudadSeleccionada : string){

    this.opcionCiudad = ciudadSeleccionada;
    this.domicilio = '';

  } 
  
  simularDireccion(){

    let random = Math.random() * (12 - 1) + 1;
    this.domicilio = this.listaDomicilios[Math.floor(random)];

  }

  calcularEnvio(){

    let random = Math.random() * (6 - 1) + 1;
    this.tipoEnvio = this.listaDomicilios[Math.floor(random)];
    this.montoAPagar = this.listaCostosEnvios[Math.floor(random)];

  }



}
