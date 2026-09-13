import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AddressService {
  private readonly baseUrl = 'https://viacep.com.br/ws';

  /**
   * Monta a URL de consulta da API ViaCEP para um CEP já validado
   * (8 dígitos numéricos).
   */
  buildUrl(cep: string): string {
    return `${this.baseUrl}/${cep}/json/`;
  }
}