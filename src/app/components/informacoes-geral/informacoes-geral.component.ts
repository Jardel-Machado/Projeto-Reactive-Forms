import { Component, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/usuario/usuario.interface';

@Component({
  selector: 'app-informacoes-geral',
  templateUrl: './informacoes-geral.component.html',
  styleUrl: './informacoes-geral.component.scss'
})
export class InformacoesGeralComponent {

  @Input({required: true}) usuario: IUsuario | undefined = {} as IUsuario;
}
