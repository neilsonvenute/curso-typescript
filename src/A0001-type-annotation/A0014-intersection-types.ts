type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
//type intersecao = AB & AC & AD;

const pessoa: Pessoa = {
  nome: 'Neilson',
  sobrenome: 'venute',
  idade: 30,
};

console.log(pessoa);
// module mode
export { pessoa };
