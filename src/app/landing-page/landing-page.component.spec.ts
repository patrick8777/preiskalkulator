import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a demo button', () => {
    const button = fixture.nativeElement.querySelector('a.btn-primary');
    expect(button.textContent).toContain('Demo');
  });

  it('should have a link to the about page', () => {
    const link = fixture.nativeElement.querySelector('a[href="/about"]');
    expect(link).toBeTruthy();
  });

  it('should have a link to the PDF viewer page', () => {
    const link = fixture.nativeElement.querySelector(
      'a[href="/example-pdf-viewer"]'
    );
    expect(link).toBeTruthy();
  });

  it('should have feature categories', () => {
    const categories = fixture.nativeElement.querySelectorAll('.col');
    expect(categories.length).toBe(4);
  });
});