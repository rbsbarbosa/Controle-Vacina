import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { VacinaComponent } from './vacina/vacina.component';
import { ConsultaClienteComponent } from './consulta-cliente/consulta-cliente.component';
import { ConsultaVacinaComponent } from './consulta-vacina/consulta-vacina.component';
import { SobreComponent } from './sobre/sobre.component';





@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    MenuComponent,
    FooterComponent,
    VacinaComponent,
    ConsultaClienteComponent,
    ConsultaVacinaComponent,
    SobreComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
