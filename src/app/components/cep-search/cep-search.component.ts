import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { AddressService } from '../../services/address.service';
import { ViaCepResponse } from '../../models/address.model';

@Component({
  selector: 'app-cep-search',
  standalone: true,
  templateUrl: './cep-search.component.html',
  styleUrl: './cep-search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CepSearchComponent {
  private readonly addressService = inject(AddressService);

  // Entrada do usuário (somente dígitos, controlada via signal)
  readonly cepInput = signal<string>('');

  // Só dispara a busca quando o usuário confirma um CEP válido
  readonly cepConfirmado = signal<string>('');

  // Validação derivada: exatamente 8 dígitos numéricos
  readonly cepValido = computed<boolean>(() => /^\d{8}$/.test(this.cepInput()));

  // Resource reativo: refaz a requisição automaticamente sempre que
  // cepConfirmado() mudar. Sem .subscribe(), sem RxJS manual.
  readonly enderecoResource = httpResource<ViaCepResponse>(() => {
    const cep = this.cepConfirmado();
    if (!cep) {
      return undefined; // sem CEP confirmado, não faz requisição
    }
    return this.addressService.buildUrl(cep);
  });

  // Derivado: true quando a API respondeu mas o CEP não existe (erro: true)
  readonly naoEncontrado = computed<boolean>(() => {
    const valor = this.enderecoResource.value();
    return !!valor?.erro;
  });

  onCepChange(valorDigitado: string): void {
    const somenteNumeros = valorDigitado.replace(/\D/g, '').slice(0, 8);
    this.cepInput.set(somenteNumeros);
  }

  buscar(): void {
    if (this.cepValido()) {
      this.cepConfirmado.set(this.cepInput());
    }
  }
}