import { IBasePaisesResponse } from "../base-paises-response.interface";
import { IEstadoResponseData } from "./estado-response-data.interface";

export interface IEstadosResponse extends IBasePaisesResponse {
  data: IEstadoResponseData;
}