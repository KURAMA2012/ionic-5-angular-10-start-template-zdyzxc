import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}

  doarAlimentos() {
    this.abrirURL(
      'https://www.google.com/maps/search/?api=1&query=Ponto+Doacao+Alimento'
    );
  }

  doarRoupas() {
    this.abrirURL(
      'https://www.google.com/maps/search/?api=1&query=Ponto+Doacao+Roupas'
    );
  }

  doarSangue() {
    this.abrirURL(
      'https://www.google.com/maps/search/?api=1&query=Ponto+Doacao+Sangue'
    );
  }

  abrirURL(url: string) {
    window.open(url, '_blank').focus();
  }
}
