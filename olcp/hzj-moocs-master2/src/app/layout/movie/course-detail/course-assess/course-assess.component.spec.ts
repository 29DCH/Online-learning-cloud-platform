import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAssessComponent } from './course-assess.component';

describe('CourseAssessComponent', () => {
  let component: CourseAssessComponent;
  let fixture: ComponentFixture<CourseAssessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAssessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAssessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
