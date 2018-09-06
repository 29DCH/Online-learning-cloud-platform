import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemHomeComponent } from './problem-home.component';

describe('ProblemHomeComponent', () => {
  let component: ProblemHomeComponent;
  let fixture: ComponentFixture<ProblemHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
