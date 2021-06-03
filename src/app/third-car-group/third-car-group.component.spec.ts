import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdCarGroupComponent } from './third-car-group.component';

describe('ThirdCarGroupComponent', () => {
  let component: ThirdCarGroupComponent;
  let fixture: ComponentFixture<ThirdCarGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdCarGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdCarGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
