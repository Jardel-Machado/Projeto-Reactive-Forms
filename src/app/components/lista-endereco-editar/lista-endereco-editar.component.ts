import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista-endereco-editar',
  templateUrl: './lista-endereco-editar.component.html',
  styleUrl: './lista-endereco-editar.component.scss',
})
export class ListaEnderecoEditarComponent {
  
  @Input({ required: true }) usuarioForm!: FormGroup;

  get listaEndereco(): FormArray {
    return this.usuarioForm.get('informacoesContato.listaDeEnderecos') as FormArray;
  }
}
