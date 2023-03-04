import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MultilangService } from '../services/multilang.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-offer-calculator',
  templateUrl: './offer-calculator.component.html',
  styleUrls: ['./offer-calculator.component.css'],
})
export class OfferCalculatorComponent {
  constructor(
    public multilangService: MultilangService,
    private multiLang: MultilangService,
    private router: Router
  ) {}
  service1 = {
    checked: false,
    price: 10,
  };
  service2 = { checked: false, price: 20 };
  service3 = { checked: false, price: 30 };
  priceTotal = 0;
  vatPercent = 7.7; // default VAT percentage
  vatAmount = 0;

  onCheckboxChange(): void {
    if (
      this.service1.checked ||
      this.service2.checked ||
      this.service3.checked
    ) {
      this.priceTotal = 0;
      if (this.service1.checked) {
        this.priceTotal += this.service1.price;
      }
      if (this.service2.checked) {
        this.priceTotal += this.service2.price;
      }
      if (this.service3.checked) {
        this.priceTotal += this.service3.price;
      }
      // calculate VAT amount and add it to the total price
      this.vatAmount = this.priceTotal * (this.vatPercent / 100);
      this.priceTotal += this.vatAmount;
    }
  }

  onCalculate(): void {
    this.onCheckboxChange();
  }
  // products array, can be populated from an API or a local storage
  products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  //HTML TO PDF
  public openPDF(): void {
    // Get the translated filename from the translation service
    const fileName = this.multiLang.getTranslation('pdfFileName');

    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);

      // Use the translated filename as the PDF name when saving
      PDF.save(`${fileName}.pdf`);
    });
  }
}
