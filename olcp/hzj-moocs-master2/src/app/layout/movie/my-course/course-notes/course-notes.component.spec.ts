import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseNotesComponent } from './course-notes.component';

describe('CourseNotesComponent', () => {
  let component: CourseNotesComponent;
  let fixture: ComponentFixture<CourseNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
