import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaSearchComponent } from './casa-search.component';

describe('CasaSearchComponent', () => {
  let component: CasaSearchComponent;
  let fixture: ComponentFixture<CasaSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasaSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
