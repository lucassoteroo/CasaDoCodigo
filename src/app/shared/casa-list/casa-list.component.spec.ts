import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaListComponent } from './casa-list.component';

describe('CasaListComponent', () => {
  let component: CasaListComponent;
  let fixture: ComponentFixture<CasaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
