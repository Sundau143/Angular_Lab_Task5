import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCarGroupComponent } from './first-car-group.component';

describe('FirstCarGroupComponent', () => {
  let component: FirstCarGroupComponent;
  let fixture: ComponentFixture<FirstCarGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCarGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCarGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
