import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista-dependentes-editar',
  templateUrl: './lista-dependentes-editar.component.html',
  styleUrl: './lista-dependentes-editar.component.scss',
})
export class ListaDependentesEditarComponent {
  @Input({ required: true }) usuarioForm!: FormGroup;

  get listaDependente(): FormArray {
    return this.usuarioForm.get('listaDeDependentes') as FormArray;
  }
}
