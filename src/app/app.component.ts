import { Component } from '@angular/core';
import { QuadraComponent } from './quadra/quadra.component';  // Importa o componente Quadra

@Component({
  selector: 'app-root',
  imports: [QuadraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'scout-volei-pva';
}
