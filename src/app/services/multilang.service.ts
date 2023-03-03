import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MultilangService {
  static translate: any;
  private currentLang: string = this.getDefaultLanguage();

  constructor() {}

  private translations: any = {
    //Navbar
    search: {
      en: 'search',
      de: 'suchen',
      fr: 'rechercher',
    },
    //landing Page
    titelLanding: {
      en: 'en Lorem ipsum dolor sit amet, consetetur',
      de: 'de Lorem ipsum dolor sit amet, consetetur',
      fr: 'fr Lorem ipsum dolor sit amet, consetetur',
    },

    text1Landing: {
      en: 'en Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
      de: 'de Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
      fr: 'fr Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
    },

    textCatLanding: {
      en: 'en Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
      de: 'de Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
      fr: 'fr Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    },

    textCatLanding2: {
      en: 'en Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
      de: 'de Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
      fr: 'fr Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    },

    textCatLanding3: {
      en: 'en Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
      de: 'de Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
      fr: 'fr Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    },

    textCatLanding4: {
      en: 'en Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
      de: 'de Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
      fr: 'fr Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    },

    textSlogan: {
      en: 'en orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores',
      de: 'de orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores',
      fr: 'fr ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores',
    },

    titelCatLanding: {
      en: 'Technology strategy and planning',
      de: 'Technologische Strategie und Planung',
      fr: 'Stratégie et planification technologiques',
    },

    titelCatLanding2: {
      en: 'IT Project Management',
      de: 'IT-Projektmanagement',
      fr: 'Gestion de projets IT',
    },

    titelCatLanding3: {
      en: 'Network and system design',
      de: 'Netzwerk und Systemdesign',
      fr: 'Conception de réseau et de système',
    },

    titelCatLanding4: {
      en: 'Cloud Computing Solutions',
      de: 'Cloud-Computing-Lösungen',
      fr: 'Solutions de cloud computing',
    },

    more: {
      en: 'Learn more',
      de: 'Erfahren Sie mehr',
      fr: 'En savoir plus',
    },
    demo: {
      en: 'Demo',
      de: 'Demo',
      fr: 'Démo',
    },
    info: {
      en: 'Information',
      de: 'Informationen',
      fr: 'Informations',
    },
    // Dashboard and Table
    placeLabel: {
      en: 'Place',
      de: 'Gemeinde',
      fr: 'Commune',
    },
    europeLabel: {
      en: 'Europe',
      de: 'Europa',
      fr: 'Europe',
    },
    //price-calculator
    productLabel: {
      en: 'Product1',
      de: 'Produkt1',
      fr: 'Europe',
    },
    productTitel: {
      en: 'Products:',
      de: 'Produkte:',
      fr: 'Europe:',
    },
    product1: {
      en: 'Product 1',
      de: 'Produkt 1',
      fr: 'Europe:',
    },
    product2: {
      en: 'Product 2',
      de: 'Produkt 2',
      fr: 'Europe:',
    },
    product3: {
      en: 'Product 3',
      de: 'Produkt 3',
      fr: 'Europe:',
    },
    productColum: {
      en: 'Product',
      de: 'Produkt',
      fr: 'Europe:',
    },
    priceColum: {
      en: 'Price',
      de: 'Preis',
      fr: 'Europe:',
    },
    priceTotal: {
      en: 'Price total:',
      de: 'Gesamtpreis:',
      fr: 'Prix total:',
    },
    vatColum: {
      en: 'Vat',
      de: 'MWST',
      fr: 'TVA',
    },
    vatTotal: {
      en: 'Vat total',
      de: 'total inkl.MWST',
      fr: 'TVA',
    },
    vatIncluded: {
      en: 'Vat total',
      de: 'total inkl.MWST',
      fr: 'TVA',
    },
    vatNotIncluded: {
      en: 'Price total without vax',
      de: 'total ohne.MWST',
      fr: 'TVA',
    },
    vatAmount: {
      en: 'vatAmount',
      de: 'MwSt.-Betrag',
      fr: 'TVA',
    },

    selectProduct: {
      en: 'Please select at least one product.',
      de: 'Bitte wählen Sie mindestens ein Produkt aus.',
      fr: 'Please select at least one product.',
    },
    addTodu: {
      en: 'Add',
      de: 'Hinzufügen',
      fr: 'Add',
    },
    addToduPlaceholder: {
      en: 'Add a new todo',
      de: 'Füge ein neues Todo hinzu',
      fr: 'Ajouter un nouveau todo',
    },
    addToduAskDel: {
      en: 'Are you sure you want to delete this todo?',
      de: 'Sind Sie sicher, dass Sie dieses ToDo löschen möchten?',
      fr: 'Êtes-vous sûr de vouloir supprimer cette tâche?',
    },
  };
  getTranslation(key: string, lang?: string) {
    if (this.translations[key]) {
      const translation = this.translations[key][lang || this.currentLang];
      return translation || this.translations[key].en;
    }
    return undefined;
  }

  getDefaultLanguage() {
    const language =
      localStorage.getItem('language') ||
      navigator.language ||
      navigator.languages[0] ||
      'en';
    return language.substring(0, 2); // Return the two-letter language code
  }

  setLanguage(lang: string) {
    this.currentLang = lang;
  }

  translate(key: string): string {
    return this.getTranslation(key, this.currentLang);
  }
}
