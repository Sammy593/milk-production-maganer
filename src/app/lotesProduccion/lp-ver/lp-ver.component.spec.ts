import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpVerComponent } from './lp-ver.component';

describe('LpVerComponent', () => {
  let component: LpVerComponent;
  let fixture: ComponentFixture<LpVerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LpVerComponent]
    });
    fixture = TestBed.createComponent(LpVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
