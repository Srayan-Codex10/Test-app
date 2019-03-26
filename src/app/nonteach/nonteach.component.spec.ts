import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonteachComponent } from './nonteach.component';

describe('NonteachComponent', () => {
  let component: NonteachComponent;
  let fixture: ComponentFixture<NonteachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonteachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonteachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
