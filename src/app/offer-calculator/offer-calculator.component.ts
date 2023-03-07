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
    this.services = this.services.map((service: any) => {
      if (service.name === name) { 
        return {checked: false, price: 30, name: newName};
      }
      return service;
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
  // var link = document.createElement('a');
  // document.body.appendChild(link);
  // link.href = `${fileName}.pdf`;
  // link.click();
}
}