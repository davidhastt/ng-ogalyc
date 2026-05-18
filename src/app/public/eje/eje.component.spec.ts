import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjeComponent } from './eje.component';

describe('EjeComponent', () => {
  let component: EjeComponent;
  let fixture: ComponentFixture<EjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
