import { TipoTelefoneEnum } from "../enums/tipo-telefone.enum";

export const descricaoTipoTelefoneMap: { [key in TipoTelefoneEnum]: string } = {
  [TipoTelefoneEnum.Residencial]: 'Residencial',
  [TipoTelefoneEnum.Celular]: 'Celular',
  [TipoTelefoneEnum.Emergencia]: 'Emergência',
};
