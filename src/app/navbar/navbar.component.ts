import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MultilangService } from '../services/multilang.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    public multilangService: MultilangService,
    private router: Router
  ) {}

  changeLanguage(lang: string) {
    localStorage.setItem('language', lang);
    this.multilangService.setLanguage(lang);
  }

  isMenuCollapsed = true;
  searchTerms: any = {
    contact: {
      title: 'Kontakt Seite',
      url: 'http://localhost:8080/contact',
    },
  };

  loggedIn: boolean = false;

  onSearch(str: string) {
    console.log(this.searchTerms[str]);
    if (this.searchTerms[str]) window.location = this.searchTerms[str].url;
  }
}
