export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do aluno: ' + this.nome + ' ' + this.sobrenome;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa1 = new Pessoa('Neilson', 'Veute', 28, '111.111.111-11');
const aluno1 = new Aluno('Neilson', 'Veute', 28, '111.111.111-11');
const cliente1 = new Cliente('Neilson', 'Veute', 28, '111.111.111-11');
console.log(pessoa1.getNomeCompleto());
console.log(aluno1.getNomeCompleto());
console.log(cliente1.getNomeCompleto());
