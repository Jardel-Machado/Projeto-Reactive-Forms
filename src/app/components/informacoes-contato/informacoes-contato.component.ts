import { IUsuario } from './../../interfaces/usuario/usuario.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-informacoes-contato',
  templateUrl: './informacoes-contato.component.html',
  styleUrl: './informacoes-contato.component.scss',
})
export class InformacoesContatoComponent {
  @Input({ required: true }) usuario: IUsuario | undefined = {} as IUsuario;
}
