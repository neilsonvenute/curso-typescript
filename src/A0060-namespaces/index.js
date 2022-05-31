/* eslint-disable @typescript-eslint/no-namespace */
var MeuNameSpace;
(function (MeuNameSpace) {
    MeuNameSpace.nomeDoNamespace = 'neilson';
    var PessoaDoNamespace = /** @class */ (function () {
        function PessoaDoNamespace(nome) {
            this.nome = nome;
        }
        return PessoaDoNamespace;
    }());
    MeuNameSpace.PessoaDoNamespace = PessoaDoNamespace;
    var pessoa = new PessoaDoNamespace('Neilson');
    console.log(pessoa);
    var OutroNamespace;
    (function (OutroNamespace) {
        OutroNamespace.nomeDoNamespace = 'Nome no outro namespace';
    })(OutroNamespace = MeuNameSpace.OutroNamespace || (MeuNameSpace.OutroNamespace = {}));
})(MeuNameSpace || (MeuNameSpace = {}));
var pessoaDoNamespace = new MeuNameSpace.PessoaDoNamespace('Neilson');
console.log(pessoaDoNamespace);
console.log(MeuNameSpace.nomeDoNamespace);
console.log(MeuNameSpace.OutroNamespace.nomeDoNamespace);
/*eslint-disable @typescript-eslint/triple-slash-reference*/
/// <reference path="modulo/modules.ts"/>
console.log(MeuNameSpace.nomeDoNamespace);
