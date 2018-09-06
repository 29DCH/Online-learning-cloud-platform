import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisscussComponent } from './disscuss.component';

describe('DisscussComponent', () => {
  let component: DisscussComponent;
  let fixture: ComponentFixture<DisscussComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisscussComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisscussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
