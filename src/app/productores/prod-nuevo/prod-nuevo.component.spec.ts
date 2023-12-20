import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdNuevoComponent } from './prod-nuevo.component';

describe('ProdNuevoComponent', () => {
  let component: ProdNuevoComponent;
  let fixture: ComponentFixture<ProdNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdNuevoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
