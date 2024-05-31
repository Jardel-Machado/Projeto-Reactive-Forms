import { DependenteList } from '../../types/dependente-list';
import { EnderecoList } from '../../types/endereco-list';
import { TelefoneList } from '../../types/telefone-list';

export interface IUsuario {
  nome: string;
  email: string;
  pais: string;
  estado: string;
  estadoCivil: number;
  rendaMensal: number;
  dataDeNascimento: string;
  listaDeTelefones: TelefoneList;
  listaDeEnderecos: EnderecoList;
  listaDeDependentes: DependenteList;
}
