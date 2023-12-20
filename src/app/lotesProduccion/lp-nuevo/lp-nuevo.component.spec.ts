import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpNuevoComponent } from './lp-nuevo.component';

describe('LpNuevoComponent', () => {
  let component: LpNuevoComponent;
  let fixture: ComponentFixture<LpNuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LpNuevoComponent]
    });
    fixture = TestBed.createComponent(LpNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
