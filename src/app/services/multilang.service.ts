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
    //price-calculator
    serviceLabel: {
      en: 'Service1',
      de: 'Dienstleistung1',
      fr: 'Service1',
    },
    serviceTitel: {
      en: 'Services:',
      de: 'Dienstleistung:',
      fr: 'Services:',
    },
    service1: {
      en: 'Service 1',
      de: 'Dienstleistung 1',
      fr: 'Service 1',
    },
    service2: {
      en: 'Service 2',
      de: 'Dienstleistung 2',
      fr: 'Service 2',
    },
    service3: {
      en: 'Service 3',
      de: 'Dienstleistung 3',
      fr: 'Service 2',
    },
    serviceColum: {
      en: 'Service',
      de: 'Dienstleistung',
      fr: 'Service',
    },
    priceColum: {
      en: 'Price',
      de: 'Preis',
      fr: 'Prix',
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
    pdfFileName: {
      en: 'offer-calculator',
      de: 'offertenkalkulator',
      fr: 'calculateur-offre',
    },
    pdfFileToolTipp: {
      en: 'Download calculator as PDF',
      de: 'Kalkulator als PDF herunterladen',
      fr: 'Télécharger le calculateur au format PDF',
    },
  };
  getTranslation(key: string, lang?: string) {
    if (this.translations[key]) {
      const translation = this.translations[key][lang || this.currentLang];
      return translation || this.translations[key].en;
    }
    return key;
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
