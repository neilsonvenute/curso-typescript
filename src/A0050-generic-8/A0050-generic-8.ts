//Record
const objeto1: Record<string, string | number> = {
  nome: 'Neilson',
  sobrenome: 'Venute',
  idade: 28,
};

console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

//Required
type PessoaRequired = Required<PessoaProtocol>;

//Partial
type PessoaPartial = Partial<PessoaProtocol>;

//Partial
type PessoaReadonly = Readonly<PessoaProtocol>;

//Partial
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'Neilson',
  sobrenome: 'Venute',
  idade: 28,
};

console.log(objeto2);

//Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

type AccountMpi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

const accountMongo: AccountMongo = {
  _id: 'asfggg45646451sa32f12a1sa3f12f1saf',
  nome: 'Neilson',
  idade: 28,
  sobrenome: 'Venute',
};

function mapAccount(accountMongo: AccountMongo): AccountMpi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

//Module mode
export default 1;
