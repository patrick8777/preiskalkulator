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

  onCheckboxChange(): void {
    if (this.produkt1.checked || this.produkt2.checked || this.produkt3.checked) {
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
      const btnDanger = document.querySelector('.btn-danger') as HTMLElement;
      if (btnDanger) {
        btnDanger.classList.add('show');
        btnDanger.classList.remove('hide');
      }
    } else {
      const btnDanger = document.querySelector('.btn-danger') as HTMLElement;
      if (btnDanger) {
        btnDanger.classList.add('hide');
        btnDanger.classList.remove('show');
      }
    }
  }
}
