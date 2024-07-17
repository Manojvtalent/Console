import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOtherProfilesComponent } from './manage-other-profiles.component';

describe('ManageOtherProfilesComponent', () => {
  let component: ManageOtherProfilesComponent;
  let fixture: ComponentFixture<ManageOtherProfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageOtherProfilesComponent]
    });
    fixture = TestBed.createComponent(ManageOtherProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
