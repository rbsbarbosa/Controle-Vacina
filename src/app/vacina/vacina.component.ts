import { ListarVacinasService } from './../service/listar_vacina.service';
import { Vacina } from './../model/vacina';
import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vacina',
  templateUrl: './vacina.component.html',
  styleUrls: ['./vacina.component.css']
})
export class VacinaComponent implements OnInit {
  @ViewChild('formVacina') formVacina!: NgForm;

  Vacina?: Vacina[] = [];

//variavel para reveberos dados do formVacina
vai!: Vacina;

// Array que irá receber do local qunato o json server receber lista do metofo getVacina
  vais: Vacina[];

  /*
   * array que recebe dentro do metodo onDelete
   * um localStorage com filtro para fazer o delete do registro no localStorage
   */
  vaisModify?: Vacina[];

  //variavel q verifica se o metodo é update ou não
  update: boolean = false;
  //variavel guarda o nome do Vacina em caso do update do nome
  nomeVacina!: string;

  constructor (private listarVacina: ListarVacinasService ) {
this.vais=[];
this.getVacina();



  }

  ngOnInit(): void {
    this.vai = new Vacina('', '','', '');
    this.getVacina();


  }
  onSubmit() {
    /*

     */

    if(this.update){
      this.listarVacina.updatealterarVacina(this.vai);
      this.vai = new Vacina('', '','', '');
      this.formVacina.reset();
      this.update = false;

    }

    else
    {
      this.listarVacina.addVacina(this.vai);
      this.vai = new Vacina('', '','', '');
      this.formVacina.reset();
    }
    this.listarVacina.getAll().subscribe((vais) => this.vais = vais);

  }

  onUpdate(vai: Vacina) {
    let vacina = Vacina.clone(vai);
    vacina.id = vai.id;
    this.vai = vacina;
    this.update = true;
    this.nomeVacina = vai.nomeVacina;
  }

  onDelete(vacina: Vacina): void {
    let mensagem = window.confirm(
      'Deseja excluir a Vacina: ' + vacina.nomeVacina
    );
    /*

    } */

    if (!mensagem) {
      return;
    } else {
      this.listarVacina.deletarVacina(vacina.id);
      this.vai = new Vacina('', '','', '');

    }
    this.listarVacina.getAll().subscribe((vais) => this.vais = vais);
  }



  getVacina(): void {

  this.listarVacina.getAll().subscribe((vais) => this.vais = vais);
 }

}
