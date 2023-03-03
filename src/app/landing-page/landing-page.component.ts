import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MultilangService } from '../services/multilang.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  constructor(
    public multilangService: MultilangService,
    private router: Router
  ) {}
}
