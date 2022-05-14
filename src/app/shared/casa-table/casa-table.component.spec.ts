import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaTableComponent } from './casa-table.component';

describe('CasaTableComponent', () => {
  let component: CasaTableComponent;
  let fixture: ComponentFixture<CasaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
