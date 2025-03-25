// src/app/quadra/quadra.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtletaService } from '../services/atleta.service';

@Component({
  selector: 'app-quadra',
  templateUrl: './quadra.component.html',
  styleUrl: './quadra.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class QuadraComponent implements OnInit {
  atletas: any[] = [];  // Lista de atletas

  constructor(private atletaService: AtletaService) {}

  ngOnInit() {
    // Buscando os dados do serviço
    this.atletaService.getAtletas().subscribe(data => {
      this.atletas = data;  // Atualizando a lista de atletas com os dados do serviço
    });
  }

  // Função para determinar a posição na quadra com base no posicaoQuadra
  getPosicao(atleta: any): string {
    switch(atleta.posicaoQuadra) {
      case 1: return 'linha-2-coluna-3';
      case 2: return 'linha-1-coluna-3';
      case 3: return 'linha-1-coluna-2';
      case 4: return 'linha-1-coluna-1';
      case 5: return 'linha-2-coluna-1';
      case 6: return 'linha-2-coluna-2';
      default: return '';
    }
  }

  // Função de rodízio usando mapeamento
  fazerRodizio(): void {
    // Garantir que posicaoQuadra é um número entre 1 e 6
    const posicoesMapeadas: { [key: number]: number } = {
      1: 6,
      2: 1,
      3: 2,
      4: 3,
      5: 4,
      6: 5
    };

    // Atualizando as posições com base no mapeamento
    this.atletas.forEach(atleta => {
      if (atleta.posicaoQuadra >= 1 && atleta.posicaoQuadra <= 6) {
        atleta.posicaoQuadra = posicoesMapeadas[atleta.posicaoQuadra];
      }
    });
  }
}
