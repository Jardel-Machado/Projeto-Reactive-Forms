import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-informacao-usuario',
  templateUrl: './item-informacao-usuario.component.html',
  styleUrl: './item-informacao-usuario.component.scss',
})
export class ItemInformacaoUsuarioComponent {
  @Input() titulo: string | undefined | null = '';
  @Input() texto: string | undefined | null = '';
}
