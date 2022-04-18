import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaFooterComponent } from './casa-footer.component';

describe('CasaFooterComponent', () => {
  let component: CasaFooterComponent;
  let fixture: ComponentFixture<CasaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasaFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
