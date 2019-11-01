import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PessoaService } from 'src/app/services/pessoa.service';

@NgModule({
  declarations: [PessoaListComponent, PessoaFormComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [PessoaListComponent],
  providers: [PessoaService]
})
export class PessoaModule { }
