import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-container-botoes',
  templateUrl: './container-botoes.component.html',
  styleUrl: './container-botoes.component.scss'
})
export class ContainerBotoesComponent {
  
  @Input({required: true}) modoEdicao : boolean = false;
  
  @Output('botaoEditar') botaoEditarEmitt = new EventEmitter<void>();
  @Output('botaoCancelar') botaoCancelarEmitt = new EventEmitter<void>();
  botaoEditar() {
    this.botaoEditarEmitt.emit();
  }
  botaoCancelar() {
    this.botaoCancelarEmitt.emit();
  }
}
