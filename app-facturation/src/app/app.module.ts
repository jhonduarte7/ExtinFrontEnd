import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
//Aqui va la primera clase de servicio
import { ClienteService } from './clientes/cliente.service';
//Aqui va la clase que configura las rutas
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
{path: '', redirectTo: '/clientes', pathMatch: 'full'},
{path: 'directivas', component: DirectivaComponent},
{path: 'clientes', component: ClientesComponent},

];




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
