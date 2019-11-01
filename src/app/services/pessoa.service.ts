import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pessoa } from '../shared/domain/pessoa';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app/app-state';
import { Endereco } from '../shared/domain/embedabble/endereco';
import * as faker from 'faker';
import { PessoaNew } from '../store/pessoa/pessoa.action';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private store: Store<AppState>) { }

  pessoaAdicionada$: Subject<Pessoa> = new Subject<Pessoa>();
  pessoaAtualizada$: Subject<Pessoa> = new Subject<Pessoa>();
  pessoaDeletada$: Subject<Pessoa> = new Subject<Pessoa>();

  public pessoaAdicionada() {
    this.store.dispatch(new PessoaNew({pessoa: this._gerarPessoa()}));
  }

  private _gerarPessoa(): Pessoa {
    const endereco: Endereco = {
      logradouro: faker.address.streetAddress(),
      numero: '',
      complemento: '',
      bairro: '',
      cep: '',
      cidade: faker.address.city(),
      estado: faker.address.country()
    };
    return {
      codigo: new Date().getMilliseconds(),
      nome: faker.name.findName(),
      idade: Math.round(Math.random() * 100),
      endereco
    };
  }

}
