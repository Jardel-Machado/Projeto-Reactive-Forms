import { PaisesList } from '../../types/paises-list';
import { IBasePaisesResponse } from '../base-paises-response.interface';

export interface IPaisesResponse extends IBasePaisesResponse {
  data: PaisesList;
}
