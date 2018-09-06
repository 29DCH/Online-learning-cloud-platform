import { TestBed, inject } from '@angular/core/testing';

import { VideoService } from './video.service';

describe('VideoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoService]
    });
  });

  it('should be created', inject([VideoService], (service: VideoService) => {
    expect(service).toBeTruthy();
  }));
});
