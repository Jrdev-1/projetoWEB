import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-perfil',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  nome='';
  perfil= {
    username: 'GsHolanda',
    nome: 'Gerson Holanda',
    local: 'Manaus',
    idade: 28,
    profissao: 'Desenvolvedor Web',
    empresa: 'Gs Tech Innovation',
    publicacoes: 1145,
    seguidores: 1780,
    seguindo: 1550,
    fotoperfil: 'https://acadtec.com.br/storage/posts/pictures/ntVKoNURQUQhP9ghaf06607dcbf590338.jpg'
  };

}
