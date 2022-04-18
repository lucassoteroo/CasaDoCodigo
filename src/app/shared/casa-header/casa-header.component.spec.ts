import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaHeaderComponent } from './casa-header.component';

describe('CasaHeaderComponent', () => {
  let component: CasaHeaderComponent;
  let fixture: ComponentFixture<CasaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasaHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
