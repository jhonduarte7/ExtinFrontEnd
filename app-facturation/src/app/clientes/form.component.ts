import { Component, OnInit } from '@angular/core';

import { Cliente } from './cliente';

import { ClienteService } from './cliente.service';

import { Router } from '@angular/router';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

private cliente: Cliente = new Cliente();//Aqui mapeo el formulario al objeto
private title: string = "Crear Cliente";

  constructor(private clienteService: ClienteService, private router: Router  ) { }

  ngOnInit() {
  }

  public create(): void{


  	/*console.log("cliked");
  	console.log(this.cliente);*/

  	this.clienteService.create(this.cliente).subscribe(

            //response => this.router.navigate(['/clientes'])

            cliente => {
            this.router.navigate(['/clientes'])
             
               Swal.fire('Cliente Nuevo registrado')

            

               }
  		);


    

  }

}
