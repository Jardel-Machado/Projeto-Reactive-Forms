import { IEndereco } from "./usuario/endereco.interface";

export interface IEnderecoParaMostrar extends IEndereco {
  tipoDescricao: string;
};