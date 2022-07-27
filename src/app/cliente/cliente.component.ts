import { Cliente } from './../model/Cliente';
import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListarClientesService } from '../service/listar_cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  @ViewChild('formCliente') formCliente!: NgForm;

  cliente?: Cliente[] = [];

//variavel para reveberos dados do formCliente
cli!: Cliente;

// Array que irá receber do lovcal qunato o json server receber lista do metofo getCliente
  clis: Cliente[];

  /*
   * array que recebe dentro do metodo onDelete
   * um localStorage com filtro para fazer o delete do registro no localStorage
   */
  clisModify?: Cliente[];

  //variavel q verifica se o metodo é update ou não
  update: boolean = false;
  //variavel guarda o nome do Cliente em caso do update do nome
  nomeCliente!: string;

  constructor (private listarCliente: ListarClientesService ) {
this.clis=[];
this.getCliente();



  }

  ngOnInit(): void {
    this.cli = new Cliente('', '','','','');
    this.getCliente();


  }
  onSubmit() {
    /*

     */

    if(this.update){
      this.listarCliente.updatealterarCliente(this.cli);
      this.cli = new Cliente('', '','','','');
      this.formCliente.reset();
      this.update = false;

    }

    else
    {
      this.listarCliente.addCliente(this.cli);
      this.cli = new Cliente('', '','','','');
      this.formCliente.reset();
    }
    this.listarCliente.getAll().subscribe((clis) => this.clis = clis);

  }

  onUpdate(cli: Cliente) {
    let cliente = Cliente.clone(cli);
    cliente.id = cli.id;
    this.cli = cliente;
    this.update = true;
    this.nomeCliente = cli.nomeCompleto;
  }

  onDelete(cliente: Cliente): void {
    let mensagem = window.confirm(
      'Deseja excluir o cliente: ' + cliente.nomeCompleto
    );
    /*

    } */

    if (!mensagem) {
      return;
    } else {
      this.listarCliente.deletarCliente(cliente.id);
      this.cli = new Cliente('', '','','','');

    }
    this.listarCliente.getAll().subscribe((cliets) => this.clis = cliets);
  }



  getCliente(): void {

  this.listarCliente.getAll().subscribe((clis) => this.clis = clis);
 }

}
