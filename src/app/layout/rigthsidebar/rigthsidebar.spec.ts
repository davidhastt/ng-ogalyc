import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rigthsidebar } from './rigthsidebar';

describe('Rigthsidebar', () => {
  let component: Rigthsidebar;
  let fixture: ComponentFixture<Rigthsidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rigthsidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rigthsidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
