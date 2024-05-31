import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IEstadosResponse } from '../interfaces/estados-response/estados-response.interface';
import { EstadosList } from '../types/estados-list';

@Injectable({
  providedIn: 'root',
})
export class EstadosService {
  constructor(private readonly httpClient: HttpClient) {}

  buscarEstados(nomePais: string): Observable<EstadosList> {
    return this.httpClient
      .post<IEstadosResponse>(
        'https://countriesnow.space/api/v0.1/countries/states',
        { country: nomePais }
      )
      .pipe(
        map((estadosResponse) => {
          return estadosResponse.data.states;
        })
      );
  }
}
