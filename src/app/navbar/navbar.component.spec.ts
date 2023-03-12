import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display the correct alt text for the navbar logo', () => {
    const logo = fixture.nativeElement.querySelector('img');
    expect(logo.alt).toBe('Logo');
  });
  it('should display the correct text and router links for the navbar links', () => {
    const links = fixture.nativeElement.querySelectorAll('a.nav-link');
    expect(links.length).toBe(5);

    expect(links[0].textContent).toBe('Home');
    expect(links[0].getAttribute('routerLink')).toBe('/landing-page');

    expect(links[1].textContent).toBe('Consulting');
    expect(links[1].getAttribute('routerLink')).toBe('/consulting');

    // Test for other navbar links omitted for brevity
  });
});