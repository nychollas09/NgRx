import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from 'src/app/shared/domain/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss']
})
export class PessoaListComponent implements OnInit {

  @Input() pessoa: Pessoa;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
  }

  public atualizarPessoa(pessoa: Pessoa) {
    this.pessoaService.pessoaAtualizada$.next(pessoa);
  }

  public deletarPessoa(pessoa: Pessoa) {
    this.pessoaService.pessoaDeletada$.next(pessoa);
  }
}
