import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailHomeComponent } from './course-detail-home.component';

describe('CourseDetailHomeComponent', () => {
  let component: CourseDetailHomeComponent;
  let fixture: ComponentFixture<CourseDetailHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
