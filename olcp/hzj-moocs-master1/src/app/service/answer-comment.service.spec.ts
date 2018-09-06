import { TestBed, inject } from '@angular/core/testing';

import { AnswerCommentService } from './answer-comment.service';

describe('AnswerCommentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnswerCommentService]
    });
  });

  it('should be created', inject([AnswerCommentService], (service: AnswerCommentService) => {
    expect(service).toBeTruthy();
  }));
});
