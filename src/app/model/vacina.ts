export class Vacina {
  id: string;
  nomeVacina: string;
  validade:  string;
  origemVacina: string;
  reforco: string;



  constructor(
    nomeVacina: string,
    validade: string,
    origemVacina: string,
    reforco: string
    ,
  ) {
    this.id = String(Math.round(Math.random() * 5000));
    this.nomeVacina =nomeVacina;
    this.validade =validade;
    this.origemVacina =origemVacina;
    this.reforco =reforco;
  }

  public static clone(vac: Vacina) {
    let v: Vacina = new Vacina(
      vac.nomeVacina,
      vac.validade,
      vac.origemVacina,
      vac.reforco

    );
    v.nomeVacina = vac.nomeVacina;
    v.validade = vac.validade;
    v.origemVacina = vac.origemVacina;
    v.reforco = vac.reforco;
    return v;
  }
}
