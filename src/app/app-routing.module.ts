import { SobreComponent } from './sobre/sobre.component';
import { ConsultaClienteComponent } from './consulta-cliente/consulta-cliente.component';
import { VacinaComponent } from './vacina/vacina.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { MenuComponent } from './menu/menu.component';
import { ConsultaVacinaComponent } from './consulta-vacina/consulta-vacina.component';



const routes: Routes = [

{path:'cliente',component: ClienteComponent},
{path:'vacina',component: VacinaComponent},
{path:'consulta-cliente',component: ConsultaClienteComponent},
{path:'consulta-vacina',component: ConsultaVacinaComponent},
{path:'sobre',component: SobreComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
