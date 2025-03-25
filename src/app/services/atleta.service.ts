// src/app/services/atleta.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ATLETAS_MOCK } from '../mocks/atletas.mock';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  constructor() { }


  // Função que retorna os atletas do mock como Observable
  getAtletas(): Observable<any[]> {
    return of(ATLETAS_MOCK);  // Simula uma chamada a um serviço backend
  }

}
