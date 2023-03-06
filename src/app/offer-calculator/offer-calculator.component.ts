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
  services: any = [
    { checked: false, price: 20, name: 'service1' },
    { checked: false, price: 50, name: 'service2' },
  ];
  priceTotal = 0;
  vatPercent = 7.7; // default VAT percentage
  vatAmount = 0;
  showEditModal: boolean = false;

  onToggleEditModal() {
    this.showEditModal = !this.showEditModal;
  }

  addProduct(product: { checked: boolean; price: number; name: string }) {
    this.services.push(product);
    this.showEditModal = false;
  }

  editProduct(name: string, newName: string) {
    this.services.forEach((service: any) => {
      if (service.name === name) {
        service.name = newName;
      }
    });
  }

  deleteProduct(name: string) {
    this.services = this.services.filter(
      (service: any) => service.name !== name
    );
  }

  areAllServicesUnchecked() {
    let result = true;
    this.services.map((service: any) => {
      if (service.checked) {
        result = false;
      }
    });
    return result;
  }

  onCheckboxChange(): void {
    const activeServices: any[] = this.services.filter(
      (service: any) => service.checked
    );
    if (activeServices.length) {
      this.priceTotal = 0;
      activeServices.map((service: any) => (this.priceTotal = service.price));
    }

    this.vatAmount = this.priceTotal * (this.vatPercent / 100);
    this.priceTotal += this.vatAmount;
  }

  //HTML TO PDF
  public openPDF(): void {
    // Get the translated filename from the translation service
    const fileName = this.multiLang.getTranslation('pdfFileName');

    // Get the htmlData element
    let DATA: any = document.getElementById('htmlData');

    // Create a canvas from the htmlData element
    html2canvas(DATA).then((canvas) => {
      // Create a data URL from the canvas
      const FILEURI = canvas.toDataURL('image/png');

      // Create a Blob object with the PDF data URL
      const pdfBlob = new Blob([FILEURI], { type: 'application/pdf' });

      // Create a temporary URL for the Blob object
      const pdfUrl = URL.createObjectURL(pdfBlob);

      // Create an iframe element and load the PDF data into it
      const iframe = document.createElement('iframe');
      iframe.setAttribute('src', pdfUrl);
      iframe.style.position = 'absolute';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.width = '100%';
      iframe.style.height = '100%';

      // Add the iframe to the document body and request full screen mode
      document.body.appendChild(iframe);
      iframe.requestFullscreen();
    });
  }

  // var link = document.createElement('a');
  // document.body.appendChild(link);
  // link.href = `${fileName}.pdf`;
  // link.click();
}
