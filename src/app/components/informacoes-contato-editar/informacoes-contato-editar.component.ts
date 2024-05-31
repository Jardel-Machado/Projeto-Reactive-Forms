import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-informacoes-contato-editar',
  templateUrl: './informacoes-contato-editar.component.html',
  styleUrl: './informacoes-contato-editar.component.scss',
})
export class InformacoesContatoEditarComponent {
  @Input({ required: true }) usuarioForm!: FormGroup;
}
