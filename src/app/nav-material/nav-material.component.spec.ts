
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMaterailComponent } from './nav-material.component';

describe('NavMaterailComponent', () => {
  let component: NavMaterailComponent;
  let fixture: ComponentFixture<NavMaterailComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMaterailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMaterailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
