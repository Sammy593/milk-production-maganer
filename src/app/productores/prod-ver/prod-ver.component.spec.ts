import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdVerComponent } from './prod-ver.component';

describe('ProdVerComponent', () => {
  let component: ProdVerComponent;
  let fixture: ComponentFixture<ProdVerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdVerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
