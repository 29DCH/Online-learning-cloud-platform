import { TestBed, inject } from '@angular/core/testing';

import { ExamTypeService } from './exam-type.service';

describe('ExamTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExamTypeService]
    });
  });

  it('should be created', inject([ExamTypeService], (service: ExamTypeService) => {
    expect(service).toBeTruthy();
  }));
});
