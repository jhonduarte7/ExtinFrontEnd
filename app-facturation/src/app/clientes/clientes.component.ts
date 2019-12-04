import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
//import { CLIENTES } from './clientes.json';//constante que exporto segunda forma de traer datos
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
 })
export class ClientesComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

  clientes: Cliente[];

  ngOnInit() {

    //this.clientes = CLIENTES;//igualo el tipo de variable declarada a la constante/segund forma 
     //this.clientes = this.clienteService.getClientes();//tercera foma y primera con el servicio
    

   this.clienteService.getClientes().subscribe(
        clientes => this.clientes = clientes 
   	);


  }

/*Primera forma
  clientes: Cliente[] = [
      {id: '1', nombre: 'John', apellido:'Duarte', email:'john@gmail.com', fechaCreada: '2019-12-22'},
      {id: '2', nombre: 'Arnulfo', apellido:'Guarin', email:'Arnulfo@gmail.com', fechaCreada: '2019-12-21'},
      {id: '3', nombre: 'Darwin', apellido:'Jaimes', email:'Darwin@gmail.com', fechaCreada: '2019-12-19'},
      {id: '4', nombre: 'Marcos', apellido:'Rojas', email:'Marcos@gmail.com', fechaCreada: '2019-12-18'},
      {id: '5', nombre: 'Alan', apellido:'Florian', email:'Alan@gmail.com', fechaCreada: '2019-12-17'},

  ];
*/




}
