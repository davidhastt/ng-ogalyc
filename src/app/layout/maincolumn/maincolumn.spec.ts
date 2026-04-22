import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maincolumn } from './maincolumn';

describe('Maincolumn', () => {
  let component: Maincolumn;
  let fixture: ComponentFixture<Maincolumn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maincolumn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Maincolumn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
