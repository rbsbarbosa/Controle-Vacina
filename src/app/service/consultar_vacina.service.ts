import { Vacina } from './../model/vacina';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ConsultarVacinaService {
 private apiUrl = 'http://localhost:3000/Vacina'

  constructor(private http: HttpClient) { }

  /*
  Metodo para retornar a lista de Cliente
  */

  getAll(): Observable<Vacina[]> {
        return this.http.get<Vacina[]>(this.apiUrl)

        ;
  }
  getClientes(vacinaRecebe:String): Observable<Vacina[]> {
    return this.http.get<Vacina[]>(`${this.apiUrl}?vacina=${vacinaRecebe}`);
  }
}
