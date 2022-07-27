import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListarClientesService {
 private apiUrl = 'http://localhost:3000/Cliente'

  constructor(private http: HttpClient) { }

  /*
  Metodo para retornar a lista de Cliente
  */

  getAll(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.apiUrl)
        ;
  }

  //cadastra o cliente utilizando o json-serve em um ARRAY
  async addCliente(cli : Cliente): Promise<any>{



    try {
      /* realiza o post no servidor via httpClient
      */
        const response = await fetch(this.apiUrl, {
        method: 'POST',
        body: JSON.stringify({
          "id": String(Math.round(Math.random() * 100)),
          "nomeCompleto": cli.nomeCompleto,
          "cpf": cli.cpf,
          "email": cli.email,
          "tpoSangue": cli.tipoSangue,
          "nacionalidade": cli.nacionalidade
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
         alert("Processo Erradoooooo");
      }else{
        alert("Cadastrado com sucesso!!!!");
      }

    } catch (error) {
      if (error instanceof Error) {
        console.log('error message: ', error.message);

      } else {
        console.log('unexpected error: ', error);

      }
    }

  }

  async updatealterarCliente(cli : Cliente): Promise<any>{
    try {
      // realiza o post no servidor via httpClient
      const resposta = await fetch(`${this.apiUrl}/${cli.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          "id": cli.id,
          "nomeCompleto": cli.nomeCompleto,
          "cpf": cli.cpf,
          "email": cli.email,
          "tpoSangue": cli.tipoSangue,
          "nacionalidade": cli.nacionalidade,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!resposta.ok) {
         alert("Função errada de alteração .....");
      }else{
        alert("Alterado com sucesso......");
      }

    } catch (error) {
      if (error instanceof Error) {
        console.log('error message: ', error.message);

      } else {
        console.log('unexpected error: ', error);

      }
    }

  }

  async deletarCliente(id:string): Promise<any>{
    console.log("ID:" + id)
    try {
      // realiza o delete no servidor via httpClient
      const resposta = await fetch(`${this.apiUrl}/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }
      })

      if (!resposta.ok) {
         alert("Opção de deletar com probelema...");
      }else{
        alert(" Excluido com sucesso o ID do cliente");
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
