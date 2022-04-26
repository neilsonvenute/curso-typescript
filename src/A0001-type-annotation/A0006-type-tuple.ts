//Tuple
const dadosCliente1: [number, string] = [1, 'Neilson'];
const dadosCliente2: [number, string, string] = [1, 'Neilson', 'Venute'];
const dadosCliente3: [number, string, string?] = [1, 'Neilson'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Neilson', 'Venute'];

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Carlos';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

//readolny array
const array1: readonly string[] = ['Neilson', 'Venute'];
const array2: ReadonlyArray<string> = ['Neilson', 'Venute'];

console.log(array1);
console.log(array2);
