import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FricingComponent } from './fricing.component';

describe('FricingComponent', () => {
  let component: FricingComponent;
  let fixture: ComponentFixture<FricingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FricingComponent]
    });
    fixture = TestBed.createComponent(FricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
