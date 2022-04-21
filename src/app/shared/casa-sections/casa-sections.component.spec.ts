import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaSectionsComponent } from './casa-sections.component';

describe('CasaSectionsComponent', () => {
  let component: CasaSectionsComponent;
  let fixture: ComponentFixture<CasaSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasaSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
