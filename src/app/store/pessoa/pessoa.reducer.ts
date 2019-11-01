import * as fromPessoaActions from './pessoa.action';
import { State } from '@ngrx/store';
import { Pessoa } from 'src/app/shared/domain/pessoa';

const PESSOA_ACTION_TYPES = fromPessoaActions.PessoaActionTypes;
const PESSOA_ALL = PESSOA_ACTION_TYPES.PESSOA_ALL;
const PESSOA_NEW = PESSOA_ACTION_TYPES.PESSOA_NEW;
const PESSOA_UPDATE = PESSOA_ACTION_TYPES.PESSOA_UPDATE;
const PESSOA_DELETE = PESSOA_ACTION_TYPES.PESSOA_DELETE;

export const initialState: Pessoa[] = [];

export function reducer(state: Pessoa[] = initialState, action: fromPessoaActions.PessoaActions) {
  switch (action.type) {
    case PESSOA_ALL:
      return State;
    case PESSOA_NEW:
      return State;
    case PESSOA_UPDATE:
      return State;
    case PESSOA_DELETE:
      return State;
    default:
      return State;
  }
}
