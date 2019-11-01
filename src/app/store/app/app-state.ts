import { Pessoa } from 'src/app/shared/domain/pessoa';
import { ActionReducerMap } from '@ngrx/store';
import * as fromPessoaReducer from '../pessoa/pessoa.reducer';

export class AppState {
  public pessoas: Pessoa[];
}

export const appReducers: ActionReducerMap<AppState> = {
  pessoas: fromPessoaReducer.reducer
};
