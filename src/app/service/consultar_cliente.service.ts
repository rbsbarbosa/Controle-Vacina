import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ConsultarClienteService {
 private apiUrl = 'http://localhost:3000/Cliente'

  constructor(private http: HttpClient) { }

  /*
  Metodo para retornar a lista de Cliente
  */

  getAll(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.apiUrl)
        ;
  }
  getClientes(clienteRecebe:String): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiUrl}?cliente=${clienteRecebe}`);
  }
}
