import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCourseComponent } from './search-course.component';

describe('SearchCourseComponent', () => {
  let component: SearchCourseComponent;
  let fixture: ComponentFixture<SearchCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
