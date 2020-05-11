import { TestBed } from '@angular/core/testing';

import { FindPitchService } from './find-pitch.service';

describe('FindPitchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FindPitchService = TestBed.get(FindPitchService);
    expect(service).toBeTruthy();
  });
});
