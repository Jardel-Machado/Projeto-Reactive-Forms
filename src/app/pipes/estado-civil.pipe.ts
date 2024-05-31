import { Pipe, PipeTransform } from '@angular/core';
import { EstadoCivilEnum } from '../enums/estado-civil.enum';
import { descricaoEstadoCivilMap } from '../utils/descricao-estado-civil-map';

@Pipe({
  name: 'estadoCivil'
})
export class EstadoCivilPipe implements PipeTransform {
  transform(estadoCivil: number | undefined): string {
    return estadoCivil ? descricaoEstadoCivilMap[estadoCivil as EstadoCivilEnum] : '';
  };

}
