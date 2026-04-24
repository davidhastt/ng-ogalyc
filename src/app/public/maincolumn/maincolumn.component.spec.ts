import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainColumnComponent } from './maincolumn.component';

describe('MainColumnComponent', () => {
  let component: MainColumnComponent;
  let fixture: ComponentFixture<MainColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainColumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainColumnComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
