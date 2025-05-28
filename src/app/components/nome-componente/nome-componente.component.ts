import { Component } from '@angular/core';

@Component({
  selector: 'app-nome-componente',
  imports: [],
  standalone: true,
  templateUrl: './nome-componente.component.html',
  styleUrl: './nome-componente.component.css'
})
export class NomeComponenteComponent {
  nome: string = "Rosivaldo da fonseca";
  profissao: string = "Desenvolvedor web";
  hobbies: string [] = ["leitura", "passear", "tecnologia", "jogar bola"]
}
