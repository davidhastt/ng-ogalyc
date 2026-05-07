import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ediciones } from './ediciones.component';

describe('Ediciones', () => {
  let component: Ediciones;
  let fixture: ComponentFixture<Ediciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ediciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ediciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
