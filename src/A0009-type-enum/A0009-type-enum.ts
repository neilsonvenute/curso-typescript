enum Cores {
  VERMELHO,
  AZUL,
  AMARELO,
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

export function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

//console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[0]);

escolhaACor(Cores.ROXO);
