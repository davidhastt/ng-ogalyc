import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigthSidebarComponent } from './rigthsidebar.component';

describe('RigthSidebarComponent', () => {
  let component: RigthSidebarComponent;
  let fixture: ComponentFixture<RigthSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RigthSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RigthSidebarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
