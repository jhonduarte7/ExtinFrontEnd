import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';

import { of, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

		  /*getClientes(): Cliente[]{
		      return CLIENTES;
		       }*///primera forma con la clase de servicio

		    getClientes(): Observable<Cliente[]>{
		      return of(CLIENTES);
		       }   


}
