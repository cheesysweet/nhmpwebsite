import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerPageComponent } from './officer-page.component';

describe('OfficerPageComponent', () => {
  let component: OfficerPageComponent;
  let fixture: ComponentFixture<OfficerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
