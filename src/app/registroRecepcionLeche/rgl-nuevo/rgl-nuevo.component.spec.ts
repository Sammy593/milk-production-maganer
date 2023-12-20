import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RglNuevoComponent } from './rgl-nuevo.component';

describe('RglNuevoComponent', () => {
  let component: RglNuevoComponent;
  let fixture: ComponentFixture<RglNuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RglNuevoComponent]
    });
    fixture = TestBed.createComponent(RglNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
