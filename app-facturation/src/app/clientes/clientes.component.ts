import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
 })
export class ClientesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  clientes: Cliente[] = [
      {id: '1', nombre: 'John', apellido:'Duarte', email:'john@gmail.com', fechaCreada: '2019-12-22'},
      {id: '2', nombre: 'Arnulfo', apellido:'Guarin', email:'Arnulfo@gmail.com', fechaCreada: '2019-12-21'},
      {id: '3', nombre: 'Darwin', apellido:'Jaimes', email:'Darwin@gmail.com', fechaCreada: '2019-12-19'},
      {id: '4', nombre: 'Marcos', apellido:'Rojas', email:'Marcos@gmail.com', fechaCreada: '2019-12-18'},
      {id: '5', nombre: 'Alan', apellido:'Florian', email:'Alan@gmail.com', fechaCreada: '2019-12-17'},

  ];



}
