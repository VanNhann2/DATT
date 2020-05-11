import { TestBed } from '@angular/core/testing';

import { BookPitchService } from './book-pitch.service';

describe('BookPitchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookPitchService = TestBed.get(BookPitchService);
    expect(service).toBeTruthy();
  });
});
