/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNameSpace {
  export const nomeDoNamespace = 'neilson';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaDoNamespace('Neilson');

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Nome no outro namespace';
  }
}

const constDoNamespace = 'Valor da const do namespace';
