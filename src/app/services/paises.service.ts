import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IPaisesResponse } from '../interfaces/paises-response/paises-response.interface';
import { PaisesList } from '../types/paises-list';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  constructor(private readonly httpClient: HttpClient) {}

  buscarPaises(): Observable<PaisesList> {
    return this.httpClient
      .get<IPaisesResponse>(
        'https://countriesnow.space/api/v0.1/countries/positions'
      )
      .pipe(
        map((paisesResponse) => {
          return paisesResponse.data;
        })
      );
  }
}
