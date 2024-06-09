export interface IUsuarioForm {
  informacoesGeral: IUsuarioFormInformacoesGeral;
  informacoesContato: IUsuarioFormInformacoesContato;
  listaDeDependentes: IUsuarioFormDependente[];
}

export interface IUsuarioFormInformacoesGeral {
  nome: string;
  email: string;
  pais: string;
  estado: string;
  estadoCivil: number;
  rendaMensal: number;
  dataDeNascimento: Date;
}

export interface IUsuarioFormInformacoesContato {
  listaDeTelefones: IUsuarioFormTelefone[];
  listaDeEnderecos: IUsuarioFormEndereco[];
}

export interface IUsuarioFormTelefone {
  tipo: number;
  tipoDescricao: string;
  numero: string;
}

export interface IUsuarioFormEndereco {
  tipo: number;
  tipoDescricao: string;
  logradouro: string;
  complemento: string;
  cidade: string;
  estado: string;
  pais: string;
}

export interface IUsuarioFormDependente {
  nome: string;
  idade: string;
  documento: string;
}
