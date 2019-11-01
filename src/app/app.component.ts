import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from './shared/domain/pessoa';
import { PessoaService } from './services/pessoa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NgRx';

  public pessoas$: Observable<Pessoa>;
  constructor(private pessoaService: PessoaService) { }


  ngOnInit(): void {
    this.pessoaService.pessoaAtualizada$.subscribe((pessoa: Pessoa) => {

    });

    this.pessoaService.pessoaDeletada$.subscribe((pessoa: Pessoa) => {

    });
  }

  public adicionar() {
    this.pessoaService.pessoaAdicionada();
  }

}
