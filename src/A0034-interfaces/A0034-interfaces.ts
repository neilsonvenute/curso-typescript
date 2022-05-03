interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeComplemto {
  nomeCompleto(): string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeComplemto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeComplemto {}

export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}
  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoaObj: TipoPessoa2 = {
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
  nome: 'Neilson',
  sobrenome: 'Agora tá ok',
};

const pessoa = new Pessoa('Neilson', 'Venute');
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
