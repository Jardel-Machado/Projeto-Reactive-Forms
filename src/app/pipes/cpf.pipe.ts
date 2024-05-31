import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {
  transform(cpf: string, esconderNumeros: boolean = false): string {
    let cpfFormatado = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,'$1.$2.$3-$4');
    
    if (esconderNumeros) {
      cpfFormatado = 'XXX.' + cpfFormatado.substring(4, 11) + '-XX';
    }

    return cpfFormatado;
  }

}
