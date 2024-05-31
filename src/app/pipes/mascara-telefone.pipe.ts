import { Pipe, PipeTransform } from '@angular/core';
import { TipoTelefoneEnum } from '../enums/tipo-telefone.enum';

@Pipe({
  name: 'mascaraTelefone'
})
export class MascaraTelefonePipe implements PipeTransform {
  transform(tipoTelefone: number): string {    
    const mascaraTelefoneMap: { [key in TipoTelefoneEnum]: string } = {
      [TipoTelefoneEnum.Residencial]: '+00 00 0000-0000',
      [TipoTelefoneEnum.Celular]: '+00 00 00000-0000',
      [TipoTelefoneEnum.Emergencia]: '+00 00 0000-0000 || +00 00 00000-0000',
    };
    return mascaraTelefoneMap[tipoTelefone as TipoTelefoneEnum];
  };
};
