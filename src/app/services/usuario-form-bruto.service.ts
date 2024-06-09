import { Injectable } from '@angular/core';
import { IUsuarioForm } from '../interfaces/usuario-form.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuarioFormBrutoService {
  valorUsuarioFormBruto: IUsuarioForm = {} as IUsuarioForm;
  
  constructor() {}
}
