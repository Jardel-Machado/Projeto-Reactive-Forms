import { Component, Input } from '@angular/core';
import { DependenteList } from '../../types/dependente-list';

@Component({
  selector: 'app-lista-dependentes',
  templateUrl: './lista-dependentes.component.html',
  styleUrl: './lista-dependentes.component.scss',
})
export class ListaDependentesComponent {
  @Input({ required: true }) listaDependentes: DependenteList | undefined = [];
}
