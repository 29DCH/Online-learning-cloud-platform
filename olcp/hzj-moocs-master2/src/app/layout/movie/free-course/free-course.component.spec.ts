import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCourseComponent } from './free-course.component';

describe('FreeCourseComponent', () => {
  let component: FreeCourseComponent;
  let fixture: ComponentFixture<FreeCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
