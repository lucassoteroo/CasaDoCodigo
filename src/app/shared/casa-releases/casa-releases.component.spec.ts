import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaReleasesComponent } from './casa-releases.component';

describe('CasaReleasesComponent', () => {
  let component: CasaReleasesComponent;
  let fixture: ComponentFixture<CasaReleasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasaReleasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
