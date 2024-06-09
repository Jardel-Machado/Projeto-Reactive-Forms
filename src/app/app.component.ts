import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { ConfirmacaoDialogComponent } from './components/confirmacao-dialog/confirmacao-dialog.component';
import { IUsuario } from './interfaces/usuario/usuario.interface';
import { UsuariosService } from './services/usuarios.service';
import { ListaDeUsuariosResponse } from './types/lista-de-usuarios-response';
import { IDialogConfirmationData } from './interfaces/dialog-confirmation-data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  modoEdicao: boolean = false;

  indexUsuarioSelecionado: number | undefined;

  usuarioSelecionado: IUsuario = {} as IUsuario;

  listaDeUsuarios: ListaDeUsuariosResponse = [];

  habilitarBotaoSalvar: boolean = false;

  usuarioAlterado: boolean = false;

  constructor(
    private readonly matDialog: MatDialog,
    private readonly usuariosService: UsuariosService
  ) {}

  ngOnInit(): void {
    this.buscarUsuarios();
  }

  buscarUsuarios() {
    this.usuariosService
      .buscarUsuarios()
      .pipe(take(1))
      .subscribe((listaDeUsuariosResponse) => {
        this.listaDeUsuarios = listaDeUsuariosResponse;
      });
  }

  obterUsuarioSelecionado(indexUsuario: number) {
    const usuarioEncontrado = this.listaDeUsuarios[indexUsuario];

    if (usuarioEncontrado) {
      this.indexUsuarioSelecionado = indexUsuario;
      this.usuarioSelecionado = structuredClone(usuarioEncontrado);
    }
  }

  metodoBotaoCancelar() {
    if (this.usuarioAlterado) {
      this.abrirDialogConfirmacao({
          title: 'O formulário foi alterado',
          message: 'Deseja realmente cancelar as alterações feitas no formulário?'
        },
        (value: boolean) => {
          if(!value) return
          this.modoEdicao = false;
          this.usuarioAlterado = false;
        }
      );
    } else {
      this.modoEdicao = false;
    }
  }

  metodoBotaoEditar() {
    this.modoEdicao = true;
  }

  metodoBotaoSalvar(){
    this.abrirDialogConfirmacao({
        title: 'Confirmar alteração de dados',
        message: 'Deseja realmente salvar os valores alterados?'    
      },
      (value: boolean) => {
        if(!value) return;

        this.salvarInformacoesUsuario();

        this.modoEdicao = false;
        this.usuarioAlterado = false;        
      }
    );
  };

  formStatusChange(formStatus: boolean) {
    setTimeout(() => (this.habilitarBotaoSalvar = formStatus), 0);
  }

  usuarioFormPrimeiraMudanca() {
    this.usuarioAlterado = true;
  }

  private abrirDialogConfirmacao(data: IDialogConfirmationData, retorno: (value: boolean) => void) {
    const dialogRef = this.matDialog.open(ConfirmacaoDialogComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe(retorno);
  }

  private salvarInformacoesUsuario() {
    console.log('Valores alterados!');
  }
}
