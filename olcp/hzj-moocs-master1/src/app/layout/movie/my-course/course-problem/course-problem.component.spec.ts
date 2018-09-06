import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseProblemComponent } from './course-problem.component';

describe('CourseProblemComponent', () => {
  let component: CourseProblemComponent;
  let fixture: ComponentFixture<CourseProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
