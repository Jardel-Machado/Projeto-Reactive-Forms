import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista-dependentes-editar',
  templateUrl: './lista-dependentes-editar.component.html',
  styleUrl: './lista-dependentes-editar.component.scss',
})
export class ListaDependentesEditarComponent {
  @Input({ required: true }) usuarioForm!: FormGroup;

  @Output() removerDependenteEmitt = new EventEmitter<number>();
  @Output() AdicionarDependenteEmitt = new EventEmitter<void>();

  get listaDependente(): FormArray {
    return this.usuarioForm.get('listaDeDependentes') as FormArray;
  }

  removerDependente(dependenteIndex: number){
    this.removerDependenteEmitt.emit(dependenteIndex);
  }

  adicionarDependente(){
    this.AdicionarDependenteEmitt.emit();
  }
}
