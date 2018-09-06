import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEssayComponent } from './course-essay.component';

describe('CourseEssayComponent', () => {
  let component: CourseEssayComponent;
  let fixture: ComponentFixture<CourseEssayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEssayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEssayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
