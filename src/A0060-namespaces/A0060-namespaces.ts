/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNameSpace {
  export const nomeDoNamespace = 'neilson';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaDoNamespace('Neilson');
  console.log(pessoa);

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Nome no outro namespace';
  }
}

const pessoaDoNamespace = new MeuNameSpace.PessoaDoNamespace('Neilson');
console.log(pessoaDoNamespace);
console.log(MeuNameSpace.nomeDoNamespace);
console.log(MeuNameSpace.OutroNamespace.nomeDoNamespace);

export default 1;
