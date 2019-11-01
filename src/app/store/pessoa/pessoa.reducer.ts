import * as fromPessoaActions from './pessoa.action';
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
      return state;
    case PESSOA_NEW:
      return state.concat([action.payload.pessoa]);
    case PESSOA_UPDATE:
      const pessoas: Pessoa[] = state.slice();
      const pessoaIndex: number = pessoas.findIndex((pessoa: Pessoa) => pessoa.codigo === action.payload.pessoa.codigo);
      if (pessoaIndex >= 0) {
        pessoas[pessoaIndex] = action.payload.pessoa;
      }
      return pessoas;
    case PESSOA_DELETE:
      return state.filter(pessoa => pessoa.codigo !== action.payload.codigo);
    default:
      return state;
  }
}
