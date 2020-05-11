import { TestBed } from '@angular/core/testing';

import { HistoryPitchService } from './history-pitch.service';

describe('HistoryPitchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistoryPitchService = TestBed.get(HistoryPitchService);
    expect(service).toBeTruthy();
  });
});
