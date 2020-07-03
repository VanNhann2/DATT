import { TestBed } from '@angular/core/testing';

import { PitchService } from './pitch.service';

describe('PitchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PitchService = TestBed.get(PitchService);
    expect(service).toBeTruthy();
  });
});
