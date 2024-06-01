import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PipesModule } from '../pipes/pipes.module';
import { InformacoesGeralComponent } from './informacoes-geral/informacoes-geral.component';
import { ItemInformacaoUsuarioComponent } from './item-informacao-usuario/item-informacao-usuario.component';
import { ListaDeUsuariosComponent } from './lista-de-usuarios/lista-de-usuarios.component';
import { InformacoesContatoComponent } from './informacoes-contato/informacoes-contato.component';
import { ListaTelefoneComponent } from './lista-telefone/lista-telefone.component';
import { ListaEnderecoComponent } from './lista-endereco/lista-endereco.component';
import { ListaDependentesComponent } from './lista-dependentes/lista-dependentes.component';
import { ContainerBotoesComponent } from './container-botoes/container-botoes.component';
import { ContainerInformacoesUsuarioComponent } from './container-informacoes-usuario/container-informacoes-usuario.component';
import { InformacoesGeralEditarComponent } from './informacoes-geral-editar/informacoes-geral-editar.component';
import { InformacoesContatoEditarComponent } from './informacoes-contato-editar/informacoes-contato-editar.component';
import { ListaTelefoneEditarComponent } from './lista-telefone-editar/lista-telefone-editar.component';
import { ListaEnderecoEditarComponent } from './lista-endereco-editar/lista-endereco-editar.component';
import { ListaDependentesEditarComponent } from './lista-dependentes-editar/lista-dependentes-editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { ConfirmacaoDialogComponent } from './confirmacao-dialog/confirmacao-dialog.component';


@NgModule({
  declarations: [
    ListaDeUsuariosComponent,
    InformacoesGeralComponent,
    ItemInformacaoUsuarioComponent,
    InformacoesContatoComponent,
    ListaTelefoneComponent,
    ListaEnderecoComponent,
    ListaDependentesComponent,
    ContainerBotoesComponent,
    ContainerInformacoesUsuarioComponent,
    InformacoesGeralEditarComponent,
    InformacoesContatoEditarComponent,
    ListaTelefoneEditarComponent,
    ListaEnderecoEditarComponent,
    ListaDependentesEditarComponent,
    ConfirmacaoDialogComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    PipesModule,
    ReactiveFormsModule,
    NgxMaskDirective,
  ],
  exports: [
    ListaDeUsuariosComponent,
    InformacoesGeralComponent,
    InformacoesContatoComponent,
    ListaDependentesComponent,
    ContainerBotoesComponent,
    ContainerInformacoesUsuarioComponent,
    ConfirmacaoDialogComponent,
  ],
  providers: [provideNgxMask()],
})
export class ComponentsModule {}
