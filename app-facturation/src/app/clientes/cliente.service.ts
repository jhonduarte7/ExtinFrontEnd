import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';

import { of, Observable} from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

	private urlEndpoint : string = "http://localhost:8080/api/clientes";

  constructor(private http: HttpClient) { }

		  /*getClientes(): Cliente[]{
		      return CLIENTES;
		       }*///primera forma con la clase de servicio

		    getClientes(): Observable<Cliente[]>{
		      //return of(CLIENTES);Esta es la ultima forma antes del api
              return this.http.get(this.urlEndpoint).pipe(

              	map( response => response as Cliente[] )


              	);     

		       }   


}
