import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FordItemComponent } from './ford-item.component';

describe('FordItemComponent', () => {
  let component: FordItemComponent;
  let fixture: ComponentFixture<FordItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FordItemComponent]
    });
    fixture = TestBed.createComponent(FordItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
