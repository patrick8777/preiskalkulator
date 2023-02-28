import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'preiskalkulator';
  produkt1 = { checked: false, preis: 10 };
  produkt2 = { checked: false, preis: 20 };
  produkt3 = { checked: false, preis: 30 };
  gesamtpreis = 0;

  berechneGesamtpreis(): void {
    this.gesamtpreis = 0;
    if (this.produkt1.checked) {
      this.gesamtpreis += this.produkt1.preis;
    }
    if (this.produkt2.checked) {
      this.gesamtpreis += this.produkt2.preis;
    }
    if (this.produkt3.checked) {
      this.gesamtpreis += this.produkt3.preis;
    }
  }
}

