import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RglVerComponent } from './rgl-ver.component';

describe('RglVerComponent', () => {
  let component: RglVerComponent;
  let fixture: ComponentFixture<RglVerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RglVerComponent]
    });
    fixture = TestBed.createComponent(RglVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
