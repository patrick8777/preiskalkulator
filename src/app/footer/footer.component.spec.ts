import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct copyright year', () => {
    const currentYear = new Date().getFullYear();
    const copyrightElement = fixture.nativeElement.querySelector('.text-dark');
    expect(copyrightElement.textContent).toContain(currentYear);
  });

  it('should display the correct social media links', () => {
    const socialLinks = fixture.nativeElement.querySelectorAll('a');
    expect(socialLinks.length).toBe(4);
    expect(socialLinks[0].href).toBe(
      'https://ch.linkedin.com/company/bwv-its-gmbh'
    );
    expect(socialLinks[1].href).toBe(
      'https://ch.linkedin.com/company/bwv-its-gmbh'
    );
    expect(socialLinks[2].href).toBe(
      'https://ch.linkedin.com/company/bwv-its-gmbh'
    );
    expect(socialLinks[3].href).toBe(
      'https://ch.linkedin.com/company/bwv-its-gmbh'
    );
  });

  it('should display the correct social media icons', () => {
    const socialIcons = fixture.nativeElement.querySelectorAll('i');
    expect(socialIcons.length).toBe(4);
    expect(socialIcons[0].classList.contains('bi-facebook')).toBeTrue();
    expect(socialIcons[1].classList.contains('bi-twitter')).toBeTrue();
    expect(socialIcons[2].classList.contains('bi-google')).toBeTrue();
    expect(socialIcons[3].classList.contains('bi-linkedin')).toBeTrue();
  });
});