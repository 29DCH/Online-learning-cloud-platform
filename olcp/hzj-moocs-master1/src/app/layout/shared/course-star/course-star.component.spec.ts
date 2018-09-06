import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStarComponent } from './course-star.component';

describe('CourseStarComponent', () => {
  let component: CourseStarComponent;
  let fixture: ComponentFixture<CourseStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
