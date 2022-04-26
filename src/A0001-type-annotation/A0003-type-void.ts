function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Neilson',
  sobrenome: 'Venute',

  exibeNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Neilson', 'Venute');
pessoa.exibeNome();

export { pessoa };
