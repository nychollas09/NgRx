import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pessoa } from '../shared/domain/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  pessoaAtualizada$: Subject<Pessoa> = new Subject<Pessoa>();
  pessoaDeletada$: Subject<Pessoa> = new Subject<Pessoa>();

}
