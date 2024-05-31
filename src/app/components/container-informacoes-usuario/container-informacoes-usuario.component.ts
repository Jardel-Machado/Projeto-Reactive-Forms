import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { take } from 'rxjs';
import { IUsuario } from '../../interfaces/usuario/usuario.interface';
import { EstadosService } from '../../services/estados.service';
import { PaisesService } from '../../services/paises.service';
import { EstadosList } from '../../types/estados-list';
import { PaisesList } from '../../types/paises-list';
import { UsuarioFormController } from './usuario-form-controller';

@Component({
  selector: 'app-container-informacoes-usuario',
  templateUrl: './container-informacoes-usuario.component.html',
  styleUrl: './container-informacoes-usuario.component.scss',
})
export class ContainerInformacoesUsuarioComponent extends UsuarioFormController implements OnInit, OnChanges{

  indiceAbaAtual: number = 0;

  listaPaises: PaisesList = [];

  listaEstados: EstadosList = [];

  private readonly paisesService = inject(PaisesService);
  private readonly estadosService = inject(EstadosService);  

  @Input({ required: true }) emModoEdicao: boolean = false;

  @Input({ required: true }) usuarioSelecionado: IUsuario = {} as IUsuario;

  ngOnInit() {
    this.buscarListaPaises();
  }
  ngOnChanges(changes: SimpleChanges) {    
    this.indiceAbaAtual = 0;

    const USUARIO_FOI_SELECIONADO =
      changes['usuarioSelecionado'] &&
      Object.keys(changes['usuarioSelecionado'].currentValue).length > 0;

    
    if (USUARIO_FOI_SELECIONADO) {            
      this.preencherUsuarioForm(this.usuarioSelecionado);      
      this.buscarListaEstados(this.usuarioSelecionado.pais);      
    }   
  }
  paisSelecionado(nomePais: string) {
    this.buscarListaEstados(nomePais);
  }

  mostrarUsuarioForm() {
    console.log('UsuarioForm', this.usuarioForm);
  }

  private buscarListaEstados(pais: string) {
    this.estadosService
      .buscarEstados(pais)
      .pipe(take(1))
      .subscribe((estadosList: EstadosList) => {
        this.listaEstados = estadosList;
      });
  }

  private buscarListaPaises() {
    this.paisesService
      .buscarPaises()
      .pipe(take(1))
      .subscribe((paisesList: PaisesList) => {
        this.listaPaises = paisesList;
      });
  }
}
