import { Pipe, PipeTransform } from '@angular/core';
import { TipoTelefoneEnum } from '../enums/tipo-telefone.enum';

@Pipe({
  name: 'telefonePlaceholder',
})
export class TelefonePlaceholderPipe implements PipeTransform {
  transform(tipoTelefone: number): string {
    const mascaraTelefoneMap: { [key in TipoTelefoneEnum]: string } = {
      [TipoTelefoneEnum.Residencial]: '+55 11 1234-1234',
      [TipoTelefoneEnum.Celular]: '+55 11 91234-1234',
      [TipoTelefoneEnum.Emergencia]: '+55 11 1234-1234 ou +55 11 91234-1234',
    };
    return mascaraTelefoneMap[tipoTelefone as TipoTelefoneEnum];
  }
}
