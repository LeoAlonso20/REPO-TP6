import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import swal from 'sweetalert2'



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

  montoAPagar : string = '';

  tipoEnvio : string = '';

  numT : string =''

  listaDomicilios : string[] = ['General Paz 25', 'Av. Sabatini 240', 'Colombia 200', 'General Paz 800', 'San Lucas 120', 
                                'Buenos Aires 550', 'Rio Cuarto 45', 'Bv. San Juan 420', 'Lima 20', 'Bartolomé Mitre 600',
                                'Azcuénaga 708', 'Av. Rivadavia 1200'];

  listaEnvios : string[][] = [['0-500 mts','$100.00'], ['501-1000 mts', '$140.00'], ['1001-1500 mts', '$180.00'], 
  ['1501-3000 mts', '$250.00'], ['3001-6000 mts', '$400.00'], ['6001-12000 mts', '$750.00']]

  

  constructor() {}

  ngOnInit(): void {
  }

  submit(f: NgForm) {

    if (f.invalid){
      Swal.fire({
        icon: 'error',
        title : 'No se ha podido realizar el pedido',
        text: 'Revise los datos ingresados'
      })

      Object.values( f.controls ).forEach( control => {
          control.markAllAsTouched;
      });
    }else{
      Swal.fire({
        icon: 'success',
        title: 'Pedido realizado con exito',
        text: 'El cadete buscará su pedido y se le entregará en su domicilio'
      })
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

  calcularEnvio(){
    
      let random = Math.random() * (6 - 1) + 1;
      this.tipoEnvio = this.listaEnvios[Math.floor(Math.random() * (6 - 1) + 1)][0];
      this.montoAPagar = this.listaEnvios.filter( elm => elm[0] == this.tipoEnvio)[0][1];

  }

}

 
