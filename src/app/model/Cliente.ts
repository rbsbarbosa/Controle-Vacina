export class Cliente {
  id: string;
  nomeCompleto: string;
  cpf: string;
  email: string;
  tipoSangue: string;
  nacionalidade: string;


  constructor(
    nomeCompleto: string,
    cpf: string,
    email: string,
    tipoSangue: string,
    nacionalidade: string

  )
  {
    this.id = String(Math.round(Math.random() * 5000));
    this.nomeCompleto =nomeCompleto;
    this.cpf = cpf;
    this.email = email;
    this.tipoSangue = tipoSangue;
    this.nacionalidade = nacionalidade
  }

  public static clone(cli: Cliente) {
    let c: Cliente = new Cliente(
      cli.nomeCompleto,
      cli.cpf,
      cli.email,
      cli.tipoSangue,
      cli.nacionalidade

    );
    c.nomeCompleto = cli.nomeCompleto;
    c.cpf = cli.cpf;
    c.email = cli.email;
    c.tipoSangue = cli.tipoSangue;
    c.nacionalidade = cli.nacionalidade;
    return c;
  }
}
