import { Component, OnInit } from '@angular/core';

import { Cliente } from './cliente';

import { ClienteService } from './cliente.service';

import { Router, ActivatedRoute} from '@angular/router';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

private cliente: Cliente = new Cliente();//Aqui mapeo el formulario al objeto
private title: string = "Crear Cliente";

  constructor(private clienteService: ClienteService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.cargarCliente()
  }

  cargarCliente(): void{
    
    this.activatedRoute.params.subscribe(params =>{

      let id = params['id']
      if(id){

        this.clienteService.getCliente(id).subscribe( (cliente) => this.cliente = cliente)
      }

      })

  }

  public create(): void{

  	/*console.log("cliked");
  	console.log(this.cliente);*/

  	this.clienteService.create(this.cliente).subscribe(

            //response => this.router.navigate(['/clientes'])

            cliente => {
            this.router.navigate(['/clientes'])
             
              // Swal.fire(`Cliente Nuevo ${cliente.nombre} registrado`)

                Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: `Cliente Nuevo ${cliente.nombre} registrado`,
                showConfirmButton: false,
                timer: 2000
                    })

                                

                                   }
                      		);
                  }//fin de crear


                  update(): void{

                      this.clienteService.update(this.cliente)
                      .subscribe(  cliente => {

                         this.router.navigate(['/clientes'])

                        Swal.fire({
                          position: 'top-center',
                          icon: 'success',
                          title: `Cliente Actualizado ${cliente.nombre} con exito!`,
                          showConfirmButton: false,
                          timer: 2000
                              })


                           }


                        )



                  } 


          


}
