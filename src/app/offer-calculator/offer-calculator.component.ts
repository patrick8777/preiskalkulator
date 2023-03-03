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
  product1 = {
    checked: false,
    price: 10,
  };
  product2 = { checked: false, price: 20 };
  product3 = { checked: false, price: 30 };
  priceTotal = 0;
  vatPercent = 7.7; // default VAT percentage
  vatAmount = 0;

  onCheckboxChange(): void {
    if (
      this.product1.checked ||
      this.product2.checked ||
      this.product3.checked
    ) {
      this.priceTotal = 0;
      if (this.product1.checked) {
        this.priceTotal += this.product1.price;
      }
      if (this.product2.checked) {
        this.priceTotal += this.product2.price;
      }
      if (this.product3.checked) {
        this.priceTotal += this.product3.price;
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

  editedProduct = { id: 0, name: '', price: 0 };
  showDialog = false;

  editProduct(id: number): void {
    // find the product to edit by
  }
  closeDialog(): void {
    this.showDialog = false;
  }

  saveProduct(): void {
    // TODO: save edited product to backend
    this.closeDialog();
  }
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
