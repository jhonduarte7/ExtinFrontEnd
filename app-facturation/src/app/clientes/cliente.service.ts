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

	private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

		  /*getClientes(): Cliente[]{
		      return CLIENTES;
		       }*///primera forma con la clase de servicio

		////////////////para listar todo los clientes en general//////////   

		    getClientes(): Observable<Cliente[]>{
		      //return of(CLIENTES);Esta es la ultima forma antes del api
              return this.http.get(this.urlEndpoint).pipe(

              	map( response => response as Cliente[] )

              	);     

		       } 
		   //////////////// fin para listar todo los clientes en general////////// 


		   //////////////////PAra crear nuevo cliente//////////////////
            create(cliente: Cliente): Observable<Cliente>{

            	return this.http.post<Cliente>(this.urlEndpoint, cliente, {headers: this.httpHeaders});
            }
		    //////////////////fin PAra crear nuevo cliente//////////////////  


}
