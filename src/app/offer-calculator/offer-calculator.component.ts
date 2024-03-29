import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MultilangService } from '../services/multilang.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-offer-calculator',
  templateUrl: './offer-calculator.component.html',
  styleUrls: ['./offer-calculator.component.css'],
})
export class OfferCalculatorComponent {
  
  constructor(
    public multilangService: MultilangService,
    private multiLang: MultilangService,
    private router: Router,
  ) {}
  services: any = [
    { checked: false, price: 20, name: 'service1' },
    { checked: false, price: 50, name: 'service2' },
  ];
  
  priceTotal = 0;
  @Input() vatPercent:number = 7.7; // default VAT percentage
  vatAmount = 0;
  showEditModal: boolean = false;
  editId: string = '';


  onToggleEditModal() {
    this.showEditModal = !this.showEditModal;
  }

  addProduct(product: {
    checked: boolean;
    price: number;
    name: string;
    isEditMode: boolean | undefined | null;
    originalName: string | undefined | null;
  }) {
    if (product.isEditMode && product.originalName) {
      this.services = this.services.map((service: any) => {
        if (service.name === product.originalName) {
          return {
            checked: product.checked,
            price: product.price,
            name: product.name,
          };
        }
        return service;
      });
    } else {
      this.services.push(product);
    }

    this.showEditModal = false;
    this.editId = '';
  }

  editProduct(name: string) {
    this.showEditModal = true;
    this.editId = name;
  }

  deleteProduct(name: string) {
    const confirmed = confirm('Möchten Sie wirklich das Produkt ' + name + ' löschen?');
    if (confirmed) {
      this.services = this.services.filter(
        (service: any) => service.name !== name
      );
    }
  }
  
  resetCalculator(): void {
    const confirmed = confirm('Möchten Sie wirklich alles zurücksetzen?');
    if (confirmed) {
    this.services.forEach((service: any) => {
      service.checked = false;
    });
    this.priceTotal = 0;
    this.vatAmount = 0;
  }
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
    
    if(this.vatPercent>=0)
    this.calculatePrice();
  }
 
  calculatePrice(): void {
    const activeServices: any[] = this.services.filter(
      (service: any) => service.checked
    );
    if (activeServices.length) {
      this.priceTotal = 0;
      activeServices.map((service: any) => (this.priceTotal += service.price));
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
