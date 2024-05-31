import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstadoCivilEnum } from '../enums/estado-civil.enum';
import { TipoTelefoneEnum } from '../enums/tipo-telefone.enum';
import { TipoEnderecoEnum } from '../enums/tipo-endereco.enum';
import { ListaDeUsuariosResponse } from '../types/lista-de-usuarios-response';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private readonly listaDeUsuarios: ListaDeUsuariosResponse = [
    {
      nome: 'Fulano',
      email: 'fulano@hotmail.com',
      pais: 'Brazil',
      estado: 'São Paulo',
      estadoCivil: EstadoCivilEnum.Solteiro, // -> Estado Civil // -> Solteiro
      rendaMensal: 5000, // -> Renda Mensal
      dataDeNascimento: '25/02/1991',
      listaDeTelefones: [
        {
          tipo: TipoTelefoneEnum.Residencial, // -> Residencial
          ddd: '11', // -> DDD
          ddi: '+55', // -> DDI
          numero: '1234-5678', // -> Número
        },
        {
          tipo: TipoTelefoneEnum.Celular, // -> Celular
          ddd: '11', // -> DDD
          ddi: '+55', // -> DDI
          numero: '91111-2222', // -> Número
        },
        {
          tipo: TipoTelefoneEnum.Emergencia, // -> Emergência
          ddd: '11', // -> DDD
          ddi: '+55', // -> DDI
          numero: '93333-4444', // -> Número
        },
      ],
      listaDeEnderecos: [
        {
          tipo: TipoEnderecoEnum.Residencial, // -> Residencial
          logradouro: 'Rua de Tal',
          complemento: 'Próximo ao parque',
          pais: 'Brazil',
          estado: 'São Paulo',
          cidade: 'Ribeirão Preto',
        },
        {
          tipo: TipoEnderecoEnum.Trabalho, // -> Trabalho
          logradouro: 'Avenida de Tal',
          complemento: 'Próximo ao centro comercial',
          pais: 'Brazil',
          estado: 'São Paulo',
          cidade: 'Santos',
        },
        {
          tipo: TipoEnderecoEnum.Alternativo, // -> Alternativo
          logradouro: 'Estrada de Tal',
          complemento: 'Próximo ao shopping',
          pais: 'Brazil',
          estado: 'São Paulo',
          cidade: 'São Carlos',
        },
      ],
      listaDeDependentes: [
        {
          nome: 'Fulaninho',
          idade: 12,
          documento: '22011944867',
        },
        {
          nome: 'Fulaninha',
          idade: 9,
          documento: '99988877766',
        },
      ],
    },
    {
      nome: 'Laura',
      email: 'laura@hotmail.com',
      pais: 'Brazil',
      estado: 'São Paulo',
      estadoCivil: EstadoCivilEnum.Casado, // -> Estado Civil // -> Casada
      rendaMensal: 6000, // -> Renda Mensal
      dataDeNascimento: '12/12/1994',
      listaDeTelefones: [
        {
          tipo: TipoTelefoneEnum.Emergencia, // -> Emergência
          ddd: '11', // -> DDD
          ddi: '+55', // -> DDI
          numero: '93333-7777', // -> Número
        },
      ],
      listaDeEnderecos: [
        {
          tipo: TipoEnderecoEnum.Trabalho, // -> Trabalho
          logradouro: 'Avenida de Tal',
          complemento: 'Próximo ao centro comercial',
          pais: 'Brazil',
          estado: 'São Paulo',
          cidade: 'Santos',
        },
      ],
      listaDeDependentes: [
        {
          nome: 'Fulaninho',
          idade: 5,
          documento: '22011944800',
        },
      ],
    },
    {
      nome: 'Marcos',
      email: 'marcos@hotmail.com',
      pais: 'Brazil',
      estado: 'São Paulo',
      estadoCivil: EstadoCivilEnum.Divorciado, // -> Estado Civil // -> Divorciado
      rendaMensal: 7000, // -> Renda Mensal
      dataDeNascimento: '11/11/1991',
      listaDeTelefones: [
        {
          tipo: TipoTelefoneEnum.Celular, // -> Celular
          ddd: '11', // -> DDD
          ddi: '+55', // -> DDI
          numero: '91111-7777', // -> Número
        },
      ],
      listaDeEnderecos: [
        {
          tipo: TipoEnderecoEnum.Alternativo, // -> Alternativo
          logradouro: 'Estrada de Tal',
          complemento: 'Próximo ao shopping',
          pais: 'Brazil',
          estado: 'São Paulo',
          cidade: 'São Carlos',
        },
      ],
      listaDeDependentes: [],
    },
  ];
  buscarUsuarios(): Observable<ListaDeUsuariosResponse> {
    return new Observable<ListaDeUsuariosResponse>((observer) => {
      setTimeout(() => {
        observer.next(this.listaDeUsuarios);
      }, 500);
    });
  }
}
