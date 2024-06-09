import { IUsuarioForm, IUsuarioFormDependente, IUsuarioFormEndereco, IUsuarioFormInformacoesGeral, IUsuarioFormTelefone } from "../interfaces/usuario-form.interface";
import { IUsuario } from "../interfaces/usuario/usuario.interface";
import { DependenteList } from "../types/dependente-list";
import { EnderecoList } from "../types/endereco-list";
import { TelefoneList } from "../types/telefone-list";
import { converterDataObjParaDataPtBr } from "./converter-data-obj-para-data-pt-br";
import { formatarNumeroTelefone } from "./formatar-numero-telefone";

export const converterUsuarioFormParaUsuario = (usuarioForm: IUsuarioForm): IUsuario => {    

    let novoUsuario: Partial<IUsuario> = {} as IUsuario;

    novoUsuario = {... converterInformacoesGeral(usuarioForm.informacoesGeral) };

    novoUsuario.listaDeTelefones = [... converterListaDeTelefones(usuarioForm.informacoesContato.listaDeTelefones) ];

    novoUsuario.listaDeEnderecos = [... converterListaDeEnderecos(usuarioForm.informacoesContato.listaDeEnderecos) ];

    novoUsuario.listaDeDependentes = [... converterListaDeDependentes(usuarioForm.listaDeDependentes) ];     

    return novoUsuario as IUsuario;
};

const converterInformacoesGeral = (informacoesGeral: IUsuarioFormInformacoesGeral): Partial<IUsuario> => {
    return {
      nome: informacoesGeral.nome,
      email: informacoesGeral.email,
      pais: informacoesGeral.pais,
      estado: informacoesGeral.estado,
      estadoCivil: informacoesGeral.estadoCivil,
      rendaMensal: informacoesGeral.rendaMensal,
      dataDeNascimento: converterDataObjParaDataPtBr(informacoesGeral.dataDeNascimento),
    };
};

const converterListaDeTelefones = (listaDeTelefones: IUsuarioFormTelefone[]): TelefoneList => {
    const novaListaDeTelefonesUsuario: TelefoneList = listaDeTelefones
      .map((telefone) => ({
        tipo: telefone.tipo,
        ddi: '+' + telefone.numero.substring(0, 2),
        ddd: telefone.numero.substring(2, 4),
        numero: formatarNumeroTelefone(telefone.numero.substring(4)),
      }))
      .filter((telefone) => telefone.ddd !== '');

    return novaListaDeTelefonesUsuario;
};

const converterListaDeEnderecos = (listaDeEnderecos: IUsuarioFormEndereco[]): EnderecoList => {
    const novaListaDeEnderecosUsuario: EnderecoList = listaDeEnderecos.map((endereco) => ({
        tipo: endereco.tipo,
        logradouro: endereco.logradouro,
        complemento: endereco.complemento,
        cidade: endereco.cidade,
        estado: endereco.estado,
        pais: endereco.pais,
    }))
    .filter((endereco) => endereco.logradouro !== '');

    return novaListaDeEnderecosUsuario;
};

const converterListaDeDependentes = (listaDeDependentes: IUsuarioFormDependente[]): DependenteList => {
    const novaListaDeDependentesUsuario: DependenteList = listaDeDependentes.map((dependente) => ({
        nome: dependente.nome,
        idade: Number(dependente.idade),
        documento: dependente.documento,
    }));

    return novaListaDeDependentesUsuario;
}