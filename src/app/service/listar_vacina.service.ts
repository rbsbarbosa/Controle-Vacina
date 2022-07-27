import { Vacina } from '../model/vacina';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListarVacinasService {
 private apiUrl = 'http://localhost:3000/Vacina'

  constructor(private http: HttpClient) { }

  /*
  Metodo para retornar a lista de Vacina
  */

  getAll(): Observable<Vacina[]> {
        return this.http.get<Vacina[]>(this.apiUrl)
        ;
  }

  //cadastra o Vacina utilizando o json-serve em um ARRAY
  async addVacina(vai : Vacina): Promise<any>{



    try {
      /* realiza o post no servidor via httpClient
      */
        const response = await fetch(this.apiUrl, {
        method: 'POST',
        body: JSON.stringify({
          "id": String(Math.round(Math.random() * 500)),
          "nomeVacina": vai.nomeVacina,
          "validade": vai.validade,
          "origemVacina": vai.origemVacina,
          "reforco": vai.reforco
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
         alert("Processo Erradoooooo");
      }else{
        alert("Cadastrado de VACINA com sucesso!!!!");
      }

    } catch (error) {
      if (error instanceof Error) {
        console.log('error message: ', error.message);

      } else {
        console.log('unexpected error: ', error);

      }
    }

  }

  async updatealterarVacina(vai : Vacina): Promise<any>{
    try {
      // realiza o post no servidor via httpClient
      const response = await fetch(`${this.apiUrl}/${vai.id}`, {
        method: 'PUT',
        body: JSON.stringify({

          "nomeVacina": vai.nomeVacina,
          "validade": vai.validade,
          "origemVacina": vai.origemVacina,
          "reforco": vai.reforco
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
         alert("Função errada de alteração .....");
      }else{
        alert("Alterado a VACINACAO com sucesso......");
      }

    } catch (error) {
      if (error instanceof Error) {
        console.log('error message: ', error.message);

      } else {
        console.log('unexpected error: ', error);

      }
    }

  }

  async deletarVacina(id:string): Promise<any>{
    console.log("ID:" + id)
    try {
      // realiza o delete no servidor via httpClient
      const response = await fetch(`${this.apiUrl}/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }
      })

      if (!response.ok) {
         alert("Opção de deletar com probelema...");
      }else{
        alert(" Excluido com sucesso o ID da VACINA");
      }

    } catch (error) {
      if (error instanceof Error) {
        console.log('error message: ', error.message);

      } else {
        console.log('unexpected error: ', error);

      }
    }
  }


}
