import { NgModule } from '@angular/core';
import { EstadoCivilPipe } from './estado-civil.pipe';
import { CpfPipe } from './cpf.pipe';
import { MascaraTelefonePipe } from './mascara-telefone.pipe';
import { TelefonePlaceholderPipe } from './telefone-placeholder.pipe';

@NgModule({
  declarations: [
    EstadoCivilPipe,
    CpfPipe,
    MascaraTelefonePipe,
    TelefonePlaceholderPipe,
  ],
  exports: [
    EstadoCivilPipe,
    CpfPipe,
    MascaraTelefonePipe,
    TelefonePlaceholderPipe,
  ],
})
export class PipesModule {}
