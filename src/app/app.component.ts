import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  switchImages = true;  // variable para switchear fotos

  controles = new FormGroup({
    control1: new FormControl('', Validators.required),
    control2: new FormControl('')
  });

  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
  ) {

    // Definir iconos
    // On
    this.matIconRegistry.addSvgIcon(
      'on',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/on.svg')
    );
    // Off
    this.matIconRegistry.addSvgIcon(
      'off',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/off.svg')
    );

  }

  // GETTERS
  get control1() { return this.controles.get('control1'); }
  get control2() { return this.controles.get('control2'); }

  switchearImagenes() {
    // Hacer que las imágen cambie en la VIEW (vista)
    this.switchImages = !this.switchImages;
  }
}
