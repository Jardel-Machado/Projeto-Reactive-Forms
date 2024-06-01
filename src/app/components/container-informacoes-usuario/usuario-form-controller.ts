import { inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoTelefoneEnum } from '../../enums/tipo-telefone.enum';
import { IUsuario } from '../../interfaces/usuario/usuario.interface';
import { DependenteList } from '../../types/dependente-list';
import { EnderecoList } from '../../types/endereco-list';
import { TelefoneList } from '../../types/telefone-list';
import { converterDataPtBrParaDataObj } from '../../utils/converter-data-pt-br-para-data-obj';
import { prepararListaTelefone } from '../../utils/preparar-lista-telefone';
import { prepararListaEndereco } from '../../utils/preparar-lista-endereco';
import { validacaoEnderecoObrigatorio } from '../../utils/validacao-usuario-form/validacao-endereco-obrigatorio';
import { IDependente } from '../../interfaces/usuario/dependente.interface';

export class UsuarioFormController {
  usuarioForm!: FormGroup;
  private emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  private formBuilder = inject(FormBuilder);

  constructor() {
    this.criarUsuarioForm();
  }

  get informacoesGeral(): FormGroup {
    return this.usuarioForm.get('informacoesGeral') as FormGroup;
  }

  get informacoesContato(): FormGroup {
    return this.usuarioForm.get('informacoesContato') as FormGroup;
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

  get informacoesGeralValido(): boolean {
    return this.informacoesGeral.valid;
  }

  get informacoesContatoValido(): boolean {
    return this.informacoesContato.valid;
  }

  get listaDeDependentesValido(): boolean {
    return this.listaDeDependentes.valid;
  }

  preencherUsuarioForm(usuario: IUsuario) {
    this.resetUsuarioForm();

    this.preencherInformacoesGeral(usuario);

    this.prencherListaDeTelefones(usuario.listaDeTelefones);

    this.prencherListaDeEnderecos(usuario.listaDeEnderecos);

    this.prencherListaDeDependentes(usuario.listaDeDependentes);    

    this.usuarioForm.markAllAsTouched();

    this.usuarioForm.updateValueAndValidity();        

    console.log(this.usuarioForm);
  }

  removerDependente(dependenteIndex: number) {
    this.listaDeDependentes.removeAt(dependenteIndex);

    this.listaDeDependentes.markAsDirty();
  }

  adicionarDependente() {
    this.listaDeDependentes.push(this.criarGrupoDependente());

    this.listaDeDependentes.markAsDirty();
  }

  private criarGrupoDependente(dependente: IDependente | null = null) {
    if (!dependente) {
      return this.formBuilder.group({
        nome: ['', Validators.required],
        idade: ['', Validators.required],
        documento: ['', Validators.required],
      });
    }

    return this.formBuilder.group({
      nome: [dependente.nome, Validators.required],
      idade: [dependente.idade, Validators.required],
      documento: [dependente.documento, Validators.required],
    });
  }

  private resetUsuarioForm() {
    this.usuarioForm.reset();

    this.informacoesGeral.reset();

    this.listaDeTelefones.reset();
    this.listaDeTelefones.clear();

    this.listaDeEnderecos.reset();
    this.listaDeEnderecos.clear();

    this.listaDeDependentes.reset();
    this.listaDeDependentes.clear();
  }

  private criarUsuarioForm() {
    this.usuarioForm = this.formBuilder.group({
      informacoesGeral: this.formBuilder.group({
        nome: ['', Validators.required],
        email: [
          '',
          [Validators.required, Validators.pattern(this.emailPattern)],
        ],
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
      const telefoneValidators =
        telefone.tipo === TipoTelefoneEnum.Emergencia
          ? []
          : [Validators.required];

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
    prepararListaEndereco(listaDeEnderecosUsuario, false, (endereco) => {
      this.listaDeEnderecos.push(
        this.formBuilder.group(
          {
            tipo: [endereco.tipo],
            tipoDescricao: [{ value: endereco.tipoDescricao, disabled: true }],
            logradouro: [endereco.logradouro],
            complemento: [endereco.complemento],
            cidade: [endereco.cidade],
            estado: [endereco.estado],
            pais: [endereco.pais],
          },
          {
            validators: validacaoEnderecoObrigatorio,
          }
        )
      );
    });    
  }

  private prencherListaDeDependentes(
    listaDeDependentesUsuario: DependenteList
  ) {
    listaDeDependentesUsuario.forEach((dependente) => {
      this.listaDeDependentes.push(this.criarGrupoDependente(dependente));
    });
  }
}
