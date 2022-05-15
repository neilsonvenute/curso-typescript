export function unirObjetos<o1, o2>(obj1: o1, obj2: o2): o1 & o2 {
  // return { ...obj1, ...obj2 };
  return Object.assign({}, obj1, obj2);
}

const obj1 = { chave1: 'valor1' };
const obj2 = { chave2: 'valor2' };
const uniao = unirObjetos(obj1, obj2);
console.log(uniao);
