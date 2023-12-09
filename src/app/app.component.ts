import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { SharedModule } from './shared/shared.module';

// Configuración del locale de la app
import localeEsCO from '@angular/common/locales/es-CO';
import localeFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localeEsCO );
registerLocaleData( localeFrCA );

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SharedModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
      this.primengConfig.ripple = true;
  }

}
