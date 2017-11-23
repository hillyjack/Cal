import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcaBankBranchComponent } from './cca-bank-branch.component';

describe('CcaBankBranchComponent', () => {
  let component: CcaBankBranchComponent;
  let fixture: ComponentFixture<CcaBankBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcaBankBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcaBankBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
