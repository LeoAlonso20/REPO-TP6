import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

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

  listaEnvios : string[][] = [['0-500 mts','$100.00'], ['501-1000 mts', '$140.00'], ['1001-1500 mts', '$180.00'], 
  ['1501-3000 mts', '$250.00'], ['3001-6000 mts', '$400.00'], ['6001-12000 mts', '$750.00']]

  montoAPagar : string = this.listaEnvios[Math.floor(Math.random() * (6 - 1) + 1)][1];

  tipoEnvio : string = this.listaDomicilios.filter( elm => elm[1] == this.montoAPagar)[0];

  constructor() {
    console.log(this.tipoEnvio, this.montoAPagar)
   }

  ngOnInit(): void {
  }

  submit(f: NgForm) {
    
    debugger;

    if (f.invalid){
      Object.values( f.controls ).forEach( control => {
          control.markAsTouched;
      });
    }
    
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

  // calcularEnvio(){

  //   let random = Math.random() * (6 - 1) + 1;
  //   this.tipoEnvio = this.listaDomicilios[Math.floor(Math.random() * (6 - 1) + 1)];
  //   this.montoAPagar = this.listaCostosEnvios[Math.floor(Math.random() * (6 - 1) + 1)];

  // }

  



}
