import { TipoEnderecoEnum } from "../enums/tipo-endereco.enum";

export const descricaoTipoEnderecoMap: { [key in TipoEnderecoEnum]: string } = {
  [TipoEnderecoEnum.Residencial]: 'Residencial',
  [TipoEnderecoEnum.Trabalho]: 'Trabalho',
  [TipoEnderecoEnum.Alternativo]: 'Alternativo',
};
