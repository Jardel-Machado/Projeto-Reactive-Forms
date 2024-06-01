import { Component, OnInit } from '@angular/core';
import { PaisesService } from './services/paises.service';
import { EstadosService } from './services/estados.service';
import { CidadesService } from './services/cidades.service';
import { UsuariosService } from './services/usuarios.service';
import { ListaDeUsuariosResponse } from './types/lista-de-usuarios-response';
import { take } from 'rxjs';
import { IUsuario } from './interfaces/usuario/usuario.interface';

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

  constructor(
    private readonly paisesService: PaisesService,
    private readonly estadosService: EstadosService,
    private readonly cidadesService: CidadesService,
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
    this.modoEdicao = false;
  }

  metodoBotaoEditar() {
    this.modoEdicao = true;
  }

  formStatusChange(formStatus: boolean) {
    setTimeout(() => this.habilitarBotaoSalvar = formStatus, 0);    
  }
}
