import { inject } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IUsuario } from "../../interfaces/usuario/usuario.interface";
import { TelefoneList } from "../../types/telefone-list";
import { EnderecoList } from "../../types/endereco-list";
import { DependenteList } from "../../types/dependente-list";
import { converterDataPtBrParaDataObj } from "../../utils/converter-data-pt-br-para-data-obj";
import { prepararListaTelefone } from "../../utils/preparar-lista-telefone";
import { TipoTelefoneEnum } from "../../enums/tipo-telefone.enum";

export class UsuarioFormController {
  usuarioForm!: FormGroup;
  private emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  private formBuilder = inject(FormBuilder);

  constructor() {
    this.criarUsuarioForm();
  }

  preencherUsuarioForm(usuario: IUsuario) {
    this.resetUsuarioForm();

    this.preencherInformacoesGeral(usuario);

    this.prencherListaDeTelefones(usuario.listaDeTelefones);

    this.prencherListaDeEnderecos(usuario.listaDeEnderecos);

    this.prencherListaDeDependentes(usuario.listaDeDependentes);    
  }
  private resetUsuarioForm() {
    this.usuarioForm.reset();   

    this.listaDeTelefones.clear();   

    this.listaDeEnderecos.clear();    

    this.listaDeDependentes.clear();
  }

  private criarUsuarioForm() {
    this.usuarioForm = this.formBuilder.group({
      informacoesGeral: this.formBuilder.group({
        nome: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        pais: ['', Validators.required],
        estado: ['', Validators.required],
        estadoCivil: [null, Validators.required],
        rendaMensal: [null, Validators.required],
        dataDeNascimento: [null, Validators.required],
      }),
      informacoesContato: this.formBuilder.group({
        listaDeTelefones: this.formBuilder.array([]),
        listaDeEnderecos: this.formBuilder.array([]),
      }),
      listaDeDependentes: this.formBuilder.array([]),
    });
  }

  private preencherInformacoesGeral(usuario: IUsuario) {
    const novoUsuario = {
      ...usuario,
      dataDeNascimento: converterDataPtBrParaDataObj(usuario.dataDeNascimento),
    };
    this.informacoesGeral.patchValue(novoUsuario);
  }
  private prencherListaDeTelefones(listaDeTelefonesUsuario: TelefoneList) {
    prepararListaTelefone(listaDeTelefonesUsuario, false, (telefone) => {
      const telefoneValidators = telefone.tipo === TipoTelefoneEnum.Emergencia ? [] : [Validators.required]
      this.listaDeTelefones.push(
        this.formBuilder.group({
          tipo: [telefone.tipo],
          tipoDescricao: [telefone.tipoDescricao],
          numero: [telefone.numero, telefoneValidators],
        })
      );     

    });    
  }

  private prencherListaDeEnderecos(listaDeEnderecosUsuario: EnderecoList) {
    listaDeEnderecosUsuario.forEach((endereco) => {
      this.listaDeEnderecos.push(
        this.formBuilder.group({
          tipo: [endereco.tipo, Validators.required],
          logradouro: [endereco.logradouro, Validators.required],
          complemento: [endereco.complemento, Validators.required],
          cidade: [endereco.cidade, Validators.required],
          estado: [endereco.estado, Validators.required],
          pais: [endereco.pais, Validators.required],
        })
      );
    });
  }
  private prencherListaDeDependentes(
    listaDeDependentesUsuario: DependenteList
  ) {
    listaDeDependentesUsuario.forEach((dependente) => {
      this.listaDeDependentes.push(
        this.formBuilder.group({
          nome: [dependente.nome, Validators.required],
          idade: [dependente.idade, Validators.required],
          documento: [dependente.documento, Validators.required],
        })
      );
    });
  }

  get informacoesGeral(): FormGroup {
    return this.usuarioForm.get('informacoesGeral') as FormGroup;
  }

  get listaDeTelefones(): FormArray {
    return this.usuarioForm.get(
      'informacoesContato.listaDeTelefones'
    ) as FormArray;
  }

  get listaDeEnderecos(): FormArray {
    return this.usuarioForm.get(
      'informacoesContato.listaDeEnderecos'
    ) as FormArray;
  }

  get listaDeDependentes(): FormArray {
    return this.usuarioForm.get('listaDeDependentes') as FormArray;
  }
}

