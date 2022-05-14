import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaPathComponent } from './casa-path.component';

describe('CasaPathComponent', () => {
  let component: CasaPathComponent;
  let fixture: ComponentFixture<CasaPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasaPathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
