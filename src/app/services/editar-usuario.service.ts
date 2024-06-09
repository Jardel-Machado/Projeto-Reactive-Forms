import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IUsuario } from '../interfaces/usuario/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class EditarUsuarioService {

  constructor() { }

  editarUsuario(novoUsuario: IUsuario): Observable<IUsuario>{
    return new Observable<{ status: number; body: IUsuario }>((observer) => {
      setTimeout(() => {
        observer.next({ status: 200, body: structuredClone(novoUsuario) });
        observer.complete();
      }, 500);
    }).pipe(map((editarUsuarioResponse) => editarUsuarioResponse.body));
  };
}
