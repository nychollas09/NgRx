import { Action } from '@ngrx/store';
import { Pessoa } from '../../shared/domain/pessoa';

export enum PessoaActionTypes {
  PESSOA_ALL = '[PESSOA_ALL] Buscar todas as pessoas',
  PESSOA_NEW = '[PESSOA_NEW] Cadastrar uma nova pessoa',
  PESSOA_UPDATE = '[PESSOA_UPDATE] Atualizar uma pessoa',
  PESSOA_DELETE = '[PESSOA_DELETE] Deletar uma pessoa'
}

export class PessoaAll implements Action {
  readonly type = PessoaActionTypes.PESSOA_ALL;
}

export class PessoaNew implements Action {
  readonly type = PessoaActionTypes.PESSOA_NEW;
  constructor(public payload: {pessoa: Pessoa}) { }
}

export class PessoaUpdate implements Action {
  readonly type = PessoaActionTypes.PESSOA_UPDATE;
  constructor(public payload: {pessoa: Pessoa}) { }
}

export class PessoaDelete implements Action {
  readonly type = PessoaActionTypes.PESSOA_DELETE;
  constructor(public payload: {codigo: number}) { }
}

export type PessoaActions = PessoaAll | PessoaNew | PessoaUpdate | PessoaDelete;
