import { EstadosList } from '../../types/estados-list';

export interface IEstadoResponseData {
  name: string;
  iso3: string;
  states: EstadosList;
}
