
import { NgForm } from '@angular/forms';
import { Cliente } from './../model/Cliente';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsultarClienteService } from '../service/consultar_cliente.service';
import { ListarClientesService } from '../service/listar_cliente.service';

@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.css']


})
export class ConsultaClienteComponent implements OnInit {
      // Para carregar o form
  @ViewChild('form') form!: NgForm;

  clientes?: Cliente[] = [];

  cliRecebe!:String
  //variavel para recebe os dados do formCliente
cli!: Cliente;

// Array que irá receber do local qunato o json server receber lista do metodo getCliente
  clis: Cliente[];

  constructor(private listarCliente: ListarClientesService, private consultarCliente: ConsultarClienteService) {
    this.clis=[];
    this.getCliente();

  }

  ngOnInit(): void {
    // Para carregar o form
    this.cliRecebe=''
  }

  consultarPesquisa(){

    this.consultarCliente.getClientes(this.cliRecebe).subscribe((clis): Cliente[] => this.clis = clis)
    this.cliRecebe =  '';

  }

  getCliente(): void {

    this.listarCliente.getAll().subscribe((clientes) => this.clientes = clientes);

   }
   // Para limpar o array

   limpar(){
    this.clis = []
   }

}
