import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FordoverviewComponent } from './fordoverview.component';

describe('FordoverviewComponent', () => {
  let component: FordoverviewComponent;
  let fixture: ComponentFixture<FordoverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FordoverviewComponent]
    });
    fixture = TestBed.createComponent(FordoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
