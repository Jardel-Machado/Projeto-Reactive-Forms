import { CidadesList } from "../../types/cidades-list";
import { IBasePaisesResponse } from "../base-paises-response.interface";

export interface ICidadesResponse extends IBasePaisesResponse {
  data: CidadesList;
};