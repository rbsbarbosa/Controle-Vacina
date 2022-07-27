import { Vacina } from './../model/vacina';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultarVacinaService } from '../service/consultar_vacina.service';
import { ListarVacinasService } from '../service/listar_vacina.service';


@Component({
  selector: 'app-consulta-vacina',
  templateUrl: './consulta-vacina.component.html',
  styleUrls: ['./consulta-vacina.component.css']
})
export class ConsultaVacinaComponent implements OnInit {

  @ViewChild('form') form!: NgForm;

  vacinas?: Vacina[] = [];

  vaiRecebe!:String
  //variavel para recebe  dados do formCliente
vai!: Vacina;

// Array que irá receber do local qunato o json server receber lista do metodo getCliente
  vais: Vacina[];

  constructor(private listarVacina: ListarVacinasService, private consultarVacina: ConsultarVacinaService) {
    this.vais=[];
    this.getVacina();

  }

  ngOnInit(): void {
    // Para carregar o form
    this.vaiRecebe=''
  }

  consultarPesquisa(){

    this.consultarVacina.getClientes(this.vaiRecebe).subscribe((vais): Vacina[] => this.vais = vais)
    this.vaiRecebe = '';

  }

  getVacina(): void {

    this.listarVacina.getAll().subscribe((vacinas) => this.vacinas = vacinas);

   }
   // Para limpar o array

   limpar(){
    this.vais = []
   }

}
