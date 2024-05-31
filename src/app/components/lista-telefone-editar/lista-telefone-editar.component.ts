import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista-telefone-editar',
  templateUrl: './lista-telefone-editar.component.html',
  styleUrl: './lista-telefone-editar.component.scss',
})
export class ListaTelefoneEditarComponent {
  @Input({ required: true }) usuarioForm!: FormGroup;

  get listaTelefone(): FormArray {
    return this.usuarioForm.get(
      'informacoesContato.listaDeTelefones'
    ) as FormArray;
  }
}
