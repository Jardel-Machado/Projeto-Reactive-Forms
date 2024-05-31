import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ICidadesResponse } from '../interfaces/cidades-response/cidades-response.interface';
import { CidadesList } from '../types/cidades-list';

@Injectable({
  providedIn: 'root',
})
export class CidadesService {
  constructor(private readonly httpClient: HttpClient) {}

  buscarCidades(nomePais: string, nomeEstado: string): Observable<CidadesList> {
    return this.httpClient
      .post<ICidadesResponse>(
        'https://countriesnow.space/api/v0.1/countries/state/cities',
        { country: nomePais, state: nomeEstado }
      )
      .pipe(
        map((cidadeResponse) => {
          return cidadeResponse.data;
        })
      );
  }
}
