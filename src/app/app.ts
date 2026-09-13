import { Component } from '@angular/core';
import { CepSearchComponent } from './components/cep-search/cep-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CepSearchComponent],
  templateUrl: './app.html',
})
export class App {}