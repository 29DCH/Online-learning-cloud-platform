import { TestBed, inject } from '@angular/core/testing';

import { FreeCourseService } from './free-course.service';

describe('FreeCourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FreeCourseService]
    });
  });

  it('should be created', inject([FreeCourseService], (service: FreeCourseService) => {
    expect(service).toBeTruthy();
  }));
});
