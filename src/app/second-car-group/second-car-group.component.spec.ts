import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCarGroupComponent } from './second-car-group.component';

describe('SecondCarGroupComponent', () => {
  let component: SecondCarGroupComponent;
  let fixture: ComponentFixture<SecondCarGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondCarGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondCarGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
