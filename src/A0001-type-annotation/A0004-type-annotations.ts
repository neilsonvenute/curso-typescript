const objetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  readonly chaveE: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
  chaveE: 'Teste',
};

objetoA.chaveA = 'Outro valor';
objetoA.chaveC = 'Nova chave';
objetoA.chaveD = 'Nova chave';

console.log(objetoA);
