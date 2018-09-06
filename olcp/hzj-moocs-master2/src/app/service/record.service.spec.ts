import { TestBed, inject } from '@angular/core/testing';

import { RecordService } from './record.service';

describe('RecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecordService]
    });
  });

  it('should be created', inject([RecordService], (service: RecordService) => {
    expect(service).toBeTruthy();
  }));
});
