import { Endereco } from './embedabble/endereco';

export class Pessoa {
  public codigo?: number;
  public nome: string;
  public idade: number;
  public endereco: Endereco = new Endereco();
}