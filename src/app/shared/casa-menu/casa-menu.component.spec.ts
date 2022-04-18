import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaMenuComponent } from './casa-menu.component';

describe('CasaMenuComponent', () => {
  let component: CasaMenuComponent;
  let fixture: ComponentFixture<CasaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasaMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
