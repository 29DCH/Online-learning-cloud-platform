import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyCourseComponent } from './study-course.component';

describe('StudyCourseComponent', () => {
  let component: StudyCourseComponent;
  let fixture: ComponentFixture<StudyCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
