import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcaBankComponent } from './cca-bank.component';

describe('CcaBankComponent', () => {
  let component: CcaBankComponent;
  let fixture: ComponentFixture<CcaBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcaBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcaBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
