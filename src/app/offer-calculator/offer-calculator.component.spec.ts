import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferCalculatorComponent } from './offer-calculator.component';

describe('OfferCalculatorComponent', () => {
  let component: OfferCalculatorComponent;
  let fixture: ComponentFixture<OfferCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
