let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
const a = 100; //eslint-disable-line

const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: 'MIRANDA',
};

function escolharCor(cor: 'VERMLEHO' | 'AMARELO' | 'AZUL'): string {
  return cor;
}

console.log(escolharCor('AZUL'));

//Module mode
export default 1;
